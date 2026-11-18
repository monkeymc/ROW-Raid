(scene, cfg) => {
  const c = window.__rp, C = window.__C;
  const K = cfg.arenaPx / 200, CX = 600, CY = 337.5;
  const X = x => CX + x * K, Y = y => CY + y * K, L = v => v * K;
  const P = cfg.palette || {};
  const col = v => (v && P[v]) || v;
  c.discardActiveObject();
  c.getObjects().filter(o => o.constructor.type !== 'PlanArena').forEach(o => c.remove(o));
  const arena = c.getObjects().find(o => o.constructor.type === 'PlanArena');
  arena.set({...cfg.arena, ...(scene.arena || {})});
  arena.dirty = true;
  const add = o => { o.__step = 0; c.add(o); return o; };
  const label = (o, s) => s ? {text: s.text ?? s, color: s.color || '#ffffff', fontSize: s.size || 22, labelPosition: s.pos || 'center',
                                labelStroke: s.stroke ?? '#000000', labelStrokeWidth: s.strokeWidth ?? 4} : {};
  const roles = cfg.roles || {};
  for (const o of scene.objects) {
    const t = o.t;
    if (t === 'circle' || t === 'donut') {
      add(new C.Circle({left: X(o.x), top: Y(o.y), originX: 'center', originY: 'center', radius: L(o.r),
        innerRadius: t === 'donut' ? L(o.inner) : 0, fill: col(o.fill || 'danger'), stroke: col(o.stroke || o.fill + 'Edge') || 'transparent',
        strokeWidth: o.sw ?? 3, arcStart: o.arcStart ?? 0, arcSweep: o.arcSweep ?? 100, strokeStyle: o.dash ? 'dash' : 'line', ...label(o, o.label)}));
    } else if (t === 'cone') {
      add(new C.Cone({left: X(o.x), top: Y(o.y), angle: o.dir, reach: L(o.reach), sweep: o.sweep * Math.PI / 180,
        fill: col(o.fill || 'danger'), stroke: col(o.stroke || (o.fill || 'danger') + 'Edge') || 'transparent', strokeWidth: o.sw ?? 3, ...label(o, o.label)}));
    } else if (t === 'rect') {
      add(new C.Rect({left: X(o.x), top: Y(o.y), originX: 'center', originY: 'center', width: L(o.w), height: L(o.h), angle: o.angle || 0,
        fill: col(o.fill || 'danger'), stroke: col(o.stroke || (o.fill || 'danger') + 'Edge') || 'transparent', strokeWidth: o.sw ?? 3, ...label(o, o.label)}));
    } else if (t === 'line' || t === 'arrow') {
      add(new C.Line([X(o.from[0]), Y(o.from[1]), X(o.to[0]), Y(o.to[1])], {stroke: col(o.color || 'arrow'), strokeWidth: o.w || 6,
        startType: o.start || 'none', endType: t === 'arrow' ? (o.end || cfg.arrowEnd || 'arrow') : (o.end || 'none'),
        strokeDashArray: o.dash ? [o.w * 2 || 12, o.w * 1.5 || 9] : null}));
    } else if ((t === 'player' && cfg.playerStyle !== 'badge') || t === 'marker') {
      const r = roles[o.role] || {};
      const size = L(o.size || r.size || 9);
      const m = add(new C.Marker({left: X(o.x), top: Y(o.y), originX: 'center', originY: 'center', asset: o.asset || r.asset,
        markerStyle: o.style || r.style || 'square', bgColor: col(o.bg || r.bg) || null, border: col(o.border || r.border) || null,
        ...label(o, o.label ?? (o.role ? {text: o.role, size: r.labelSize || 20, pos: r.labelPos || 'bottom'} : null))}));
      m.__size = size;
    } else if (t === 'badge' || t === 'player') {
      const r = roles[o.role] || {};
      const sz = L(o.size || r.size || 8);
      add(new C.Rect({left: X(o.x), top: Y(o.y), originX: 'center', originY: 'center', width: sz, height: sz, rx: L(1), ry: L(1),
        fill: col(r.bg || '#555555'), stroke: col(r.border || '#ffffff'), strokeWidth: 2, strokePosition: 'inside',
        text: o.label ?? o.role, color: '#ffffff', fontSize: r.labelSize || 15, labelPosition: 'center', labelStroke: null}));
    } else if (t === 'waymark') {
      const w = add(new C.Waypoint(null, {left: X(o.x), top: Y(o.y), originX: 'center', originY: 'center', wayId: o.id}));
      w.scaleToWidth(L(o.size || 10));
    } else if (t === 'ability') {
      const a = add(new C.Ability([], {left: X(o.x), top: Y(o.y), abilityId: o.id, colorA: col(o.colorA || o.color || '#ffffff'), colorB: col(o.colorB || o.color || '#ffffff'), opacity: o.opacity || 1}));
      a.__size = L(o.size || 16);
    } else if (t === 'text') {
      add(new C.IText(o.text, {left: X(o.x), top: Y(o.y), originX: 'center', originY: 'center', fontSize: L(o.size || 7),
        fill: col(o.color || 'label'), fontWeight: o.weight || 700, fontFamily: o.font || 'Roboto, Arial, sans-serif',
        stroke: col(o.stroke ?? 'stroke'), strokeWidth: o.strokeWidth ?? 3, paintFirst: 'stroke', angle: o.angle || 0, textAlign: 'center'}));
    }
  }
  window.__fit = () => {
    for (const o of c.getObjects()) if (o.__size) { const w = o.width || 1; o.set({scaleX: o.__size / w, scaleY: o.__size / w}); o.setCoords(); }
    c.requestRenderAll();
  };
  window.__export = (cfg) => {
    window.__fit();
    c.discardActiveObject();
    const pad = L(cfg.pad ?? 4), R = cfg.arenaPx / 2;
    const vpt = c.viewportTransform.slice();
    c.setViewportTransform([1, 0, 0, 1, 0, 0]);
    const url = c.toDataURL({format: 'png', multiplier: cfg.multiplier || 1.5, left: CX - R - pad, top: CY - R - pad, width: 2 * (R + pad), height: 2 * (R + pad)});
    c.setViewportTransform(vpt);
    return url;
  };
  window.__fit();
  return c.getObjects().length;
}

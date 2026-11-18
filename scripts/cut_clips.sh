#!/usr/bin/env bash
# Cut one short clip per Baron skill from the mechanics guide (YouTube jPYYMamAacg, channel 阿萬).
# Usage: scripts/cut_clips.sh <source.mp4> <out_dir>
set -euo pipefail
src=$1; out=$2
cut() { # name start_seconds duration [poster_offset]
  ffmpeg -v error -y -ss "$2" -i "$src" -t "$3" -vf scale=1280:-2 -c:v libx264 -crf 27 -preset slow \
    -c:a aac -b:a 96k -movflags +faststart "$out/$1.mp4"
  ffmpeg -v error -y -ss "$(( $2 + ${4:-2} ))" -i "$src" -frames:v 1 -vf scale=1280:-2 -q:v 4 "$out/$1.jpg"
}
cut abyss-gaze             52 10
cut phantom-portals       161 12
cut phantom-spring        191 10 3
cut abyssal-surge         206 12
cut shadow-might          219 14
cut position              196 12 3
cut blue-beams             87 12
cut abyss-gaze-rect       100  9 4
cut abyss-gaze-rings      335  7 3
cut shadow-might-enrage   343  9 4
cut abyssal-surge-corner  214  8 4
cut blue-beams-clockwise  118 10 5
cut blue-beams-three      389 12 6
cut phantom-portals-last  410 12 4

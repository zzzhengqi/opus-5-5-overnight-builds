# FALL LINE — Freeride Mountain

A freeride snowboard & ski game on one huge procedurally built alpine massif, **Mont Vireaux**.
Drop in anywhere, ride any line, throw tricks off anything and get judged on every run.
Runs fully offline in the browser (WebGL2, three.js). Everything — terrain, snow, rider, trees, audio, UI — is generated in code.

## Start

```sh
./start.sh          # serves ./dist at http://localhost:8141 (python3 http.server, no network needed)
```
Open http://localhost:8141 in Chrome/Edge/Firefox. The demo rider starts immediately; press any key or gamepad button to take over.
The build is a single self-contained file (`dist/index.html`, JS and CSS inlined), so it also runs when opened directly from disk.

Development: `npm install` then `npx vite --port 8142` (dev server), `npx vite build` (writes ./dist).

## Controls

| Action | Keyboard | Gamepad |
|---|---|---|
| Steer / set edge | A / D | Left stick ← → |
| Tuck (speed) / skate on flats | W | Left stick ↑ |
| Brake (hockey stop) / lean back in powder | S | Left stick ↓ or B |
| Charge ollie (hold) / pop (release) | Space | A |
| Spin left / right (air) | A / D | Left stick ← → |
| Front flip / back flip (air, fresh press) | W / S | Left stick ↑ / ↓ |
| Off-axis (cork / rodeo / misty) | spin + flip together | diagonal on left stick |
| Grab (8 directions, hold to tweak) | Arrow keys (or I J K L), diagonals combine | Right stick, LB/RB/LT/RT quick grabs |
| Alternative grabs (roast beef, crail, truck driver, seatbelt …) | Shift + arrows | LB+RB + grab |
| Nose / tail press, butters (ground), presses on rails | ↑ / ↓ (+ A/D to butter-spin) | Right stick ↑ / ↓ |
| Rail: 50-50 ↔ boardslide | A / D while grinding | Left stick |
| Camera: follow / helmet / cinematic | C | Y |
| Mountain map (drop zones & events; click anywhere to drop) | M or Tab | Back/View |
| Start the event at a nearby beacon | E | D-pad up |
| Respawn / restart event | R | X |
| Ski ⇄ snowboard | T | pause menu |
| Regular ⇄ goofy stance | G | — |
| Weather: clear ⇄ snowfall | N | — |
| Time of day: morning ⇄ golden hour | H | — |
| Rider outfit | O | — |
| Instant replay of the last air (slow-motion orbit; any key ends it) | V | D-pad down |
| Pause menu | Esc or P | Start/Menu |

The active controls are always shown bottom-left and change with context (ground / air / rail / menu, keyboard or gamepad glyphs).

## Game

- **Free ride** from 9 drop zones (Summit, Crow's Couloir, The Steps, Sunbowl Cornice, Pillow Garden, Larch Glades, Vireaux Piste,
  Aurel Park, Aurel Superpipe) — or click anywhere on the mountain map to drop in exactly there.
- **8 events** with bronze / silver / gold targets and personal bests (localStorage): trick contests (Aurel Park Jam, Pillow Pop, Superpipe Session),
  races through gates (Vireaux Downhill, Glade Rush) and judged freeride lines (Crow's Couloir Line, Sunbowl Freeride, Summit to Valley).
- After 30 s without input the demo rider takes over again.

See NOTES.md for physics, judging formulas and measurements, DESIGN.md for architecture.

## Scripting API (for recording / automation)

```js
GAME.state()                 // { speedKmh, airborne, trick, combo, multiplier, runScore, snowType, discipline, mode, camera, fps }
GAME.demo()                  // start the AI demo run (snowboard: Sunbowl cornice → powder → kicker line; later runs alternate with a ski rail line)
GAME.play(startIndex, 'snowboard' | 'ski')   // free ride from drop zone 0–8
GAME.setCamera('follow' | 'helmet' | 'cinematic')
```
API calls close any open menu or results screen first.

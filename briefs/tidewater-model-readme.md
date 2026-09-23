# Operation Tidewater — a living voxel diorama

A real-time, fully procedural voxel diorama of a fictional modern combined-arms exercise, built like a
tabletop scale model on a walnut display plinth. One continuous slab of landscape runs from snow-capped
alpine peaks, a glacier lake and a waterfall, through conifer forest, meadows, lavender / wheat / vine
fields, a Mediterranean village and an airfield, down to dunes, a sandy bay and a turquoise sea. The slab is
cut cleanly on every side: rock, clay and sandstone strata show on the land edges, and the sea is cut like a
clear resin block.

Everything in it moves:

- **Air** — a pair of twin-engine fighters flying a formation loop (banking, afterburners, wingtip vapour,
  flare releases), a delta-canard fighter on a wide loop, another one doing takeoff → circuit → landing →
  taxi at the airfield, an attack helicopter firing rockets and its chin gun on the range, a tandem-rotor
  transport helicopter shuttling between the amphibious ship's deck and the base helipad, a MALE drone and
  a four-engine transport circling high.
- **Land** — three main battle tanks on a dirt training loop (terrain-following pitch/roll, animated
  tracks, turret traverse, recoil, muzzle flash, tracer, impact explosions), two convoys (8×8 IFVs, trucks,
  utility vehicles) driving between the base and the beach, a firebase with two rocket launchers
  (ripple-fired rockets with smoke trails) and a self-propelled howitzer, an air-defence launcher that
  fires live-test missiles with air bursts, a rotating radar truck.
- **Sea** — an amphibious assault ship with an open stern well deck: two hovercraft (with a tank / trucks on
  deck) and a landing craft leave the well deck, cross the bay, beach and lower their ramps, then return —
  the tank rolls down the bow ramp onto the sand, fires toward the range and reverses back aboard, and the
  landing craft's utility vehicle drives ashore and back; the frigate also ripples vertical-launch missiles;
  a stealth frigate fires its gun at the range; patrol boats trace foamy wakes; a submarine surfaces in a
  burst of foam, cruises with its sail above the swell and dives again.
- **Life** — dolphins leaping around the yacht, animated sea with depth colour, a sandy turquoise shelf, rolling surf and swash, wakes and sun
  glints; seagrass and sponges on the seabed; rivers with cascades and waterfall mist; spindrift blowing off
  the summits; drifting clouds casting shadows; gulls circling the headland; a rotating lighthouse lamp,
  windmill and control-tower radar; a farmer's tractor working the crop rows; fishing boats moored at the
  jetty and a yacht swinging at anchor; coloured signal smoke marking the landing zones; runway lights;
  smoke, dust and contrails drifting with one consistent wind.

No real flags, insignia, markings or conflicts; no casualties — it is an exercise on a target range.

## Run

```bash
npm start          # serves the pre-built diorama from dist/ at http://localhost:8121
```

To rebuild from source: `npm install && npm run build` (Vite). `npm run dev` starts a dev server.

## Controls

- The cinematic tour (~110 s, seamless loop) starts automatically.
- **Drag** to orbit, **scroll** to zoom, **right-drag** to pan — the first drag or wheel hands control to you.
- **Replay tour** restarts the tour. **Sound** toggles audio (sound also starts on the first click).
- `?clean` hides all UI. (Debug helpers: `?day` midday light, `?cam=x,y,z,tx,ty,tz` fixed camera,
  `?follow=jetA` chase camera, `?fixedres` disables the dynamic-resolution guard, `?ao` adds N8AO
  screen-space AO on top of the per-vertex voxel AO, `?tilt` adds a miniature-photography tilt-shift blur.)

## How it is made

- Terrain: a 384 × 320 × 180 voxel volume generated from layered noise (ridged peaks with terraced ledges,
  carved river/lake, flattened airfield/roads/pads), biome + strata painting, procedural trees and rocks;
  face-culled meshing with per-vertex ambient occlusion; the cut walls use per-column strips with a strata
  texture.
- Vehicles and buildings: hand-authored in code from voxels (`src/models/`, 1 voxel = 1/3 terrain voxel),
  greedy-meshed with per-vertex AO and shader-side per-voxel colour variation, assembled into animated part
  hierarchies (turrets, barrels, rotors, ramps, fans, tracks, wheels).
- Rendering: three.js WebGL2, 4096² sun shadow map (refreshed at 30 Hz), sky-derived environment lighting,
  underwater light absorption in the voxel shader, custom water shaders (smooth depth field, breaker lines,
  foam map for wakes, resin-block walls with god rays), instanced voxel particles with alpha-to-coverage,
  pooled flash lights; postprocessing with MSAA, bloom (only for truly hot sources), ACES tone mapping,
  colour grading and vignette. A performance guard only engages if the GPU cannot hold ~47 fps: it lowers
  the render resolution (down to 72 %), then MSAA, and restores both when headroom returns.
- Terrain and models are greedy-meshed; per-voxel colour variation is computed in the shader from voxel
  coordinates, static buildings are merged into a single draw call.
- Audio: procedural Web Audio — surf, wind, gulls, a distant village church bell, distance-aware engine voices with doppler (jets,
  helicopters, hovercraft, boats, tanks), weapon one-shots through a generated convolution reverb.

## Libraries

- [three.js](https://threejs.org) (rendering, OrbitControls, SimplexNoise)
- [postprocessing](https://github.com/pmndrs/postprocessing) (effect composer, bloom, tone mapping)
- [n8ao](https://github.com/N8python/n8ao) (optional screen-space AO, `?ao`)
- [Vite](https://vitejs.dev) (build), [Playwright](https://playwright.dev) (dev-time screenshots only)

All models, textures and sounds are generated in code; nothing is downloaded at runtime.

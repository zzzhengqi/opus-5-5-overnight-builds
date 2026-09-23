You are about to spend the next 4 hours on one single piece of work: the most breathtaking real-time voxel diorama you are capable of building. You work alone and autonomously inside a coding harness with a shell, a real browser and a toolbox of libraries. Nobody will answer questions and nobody will help you. Use the entire time.

This is a showcase. It will be shown side by side with the work of other AI models that receive this exact brief, the exact same tools and the exact same time. The goal is NOT "error-free" and NOT "finished early". The goal is the most impressive result you can possibly produce. Everything below is a floor, not a ceiling: if you can do more, do more. More detail, more life, more polish.

==================================================
1. THE PIECE
==================================================
A modern military diorama in voxel art, built like a masterpiece tabletop scale model on a display base: one self-contained slab of landscape, cut cleanly at its edges so the layered strata of earth, rock and soil show on every side, and the sea is cut just as cleanly where it meets the edge of the base.

What must be in it:
- MODERN MILITARY HARDWARE, every piece built from voxels: fighter jets and tanks for sure, and whatever else a modern military fields. That choice is yours, and the more variety you can pull off, the better. Every vehicle must read instantly as what it is from across the room, and still reward a close look with real voxel-level detail: canopies, intakes, wings and control surfaces, turrets, barrels, road wheels and tracks, hull lines, and the right proportions.
- MANY DIFFERENT TERRAINS IN ONE CONTINUOUS LANDSCAPE: it runs from high mountains where snow lies on the peaks and slopes, all the way down to a beach at the water's edge, where boats come in from the sea and land. What lies in between is your call. Every transition from one terrain to the next must feel natural and handcrafted, never like tiles glued together. Everything has to be in there.
- BEAUTY: the diorama must be beautiful and inviting, a place people want to lean in and explore. It must never look like a grim, frustrating desert battlefield: no endless brown sand, no dreary war-zone palette.
- ACTION: the hardware is alive and in action, like a classic military diorama brought to life. Jets fly, tanks drive, boats come in and land, weapons fire with muzzle flashes, tracers, smoke and explosions. Stylized and spectacular. No blood, no gore, no casualties shown.
- FICTION: no real national flags, insignia, unit markings or real-world conflicts.

==================================================
2. QUALITY BAR: BEAUTY AND DETAIL FIRST
==================================================
Push every one of these as far as you can. Judge your work against premium, hand-crafted voxel art and high-end real-time renders, not against tech demos.

- VOXEL CRAFT: dense, deliberate, hand-placed-looking detail across every terrain and every vehicle. Scale is part of the wow: with instancing, chunked or greedy meshing and merged geometry, a browser diorama can carry hundreds of thousands to millions of voxels. Use that headroom for detail. Rich, harmonious colors with subtle per-voxel variation, so no surface looks like flat plastic.
- LIGHT AND ATMOSPHERE: a convincing sun and sky light, crisp soft-edged shadows across the whole diorama (cascaded shadow maps or an equivalent), ambient occlusion (per-vertex voxel AO and/or screen-space AO), deliberate tone mapping and color grading, atmospheric depth and haze on the distant mountains, bloom only where light is truly hot: muzzle flashes, afterburners, explosions, sun glints on water.
- WATER: a fully animated sea. Waves, a readable surf line with foam rolling onto the beach, color that shifts with depth from shallow turquoise to deep blue, specular glints, wakes and bow spray behind moving boats.
- SNOW: snow that reads clearly from far away: bright but never blown out, cool blue-tinted shadows, snow settling on ledges and rocks, exposed rock where slopes are steep.
- MOTION: jets fly believable paths with speed, banking into turns, climbs and dives, afterburner glow. Tanks follow the shape of the ground, pitch and roll over slopes, traverse their turrets and recoil when they fire. Boats pitch and roll on the swell, slow down and land at the beach.
- EFFECTS: layered particles in a style that matches the voxels: muzzle flashes, smoke that rises and drifts with one consistent wind, dust and snow kicked up behind vehicles, sea spray, explosion fireballs with debris and lingering smoke.
- PERFORMANCE: a smooth 60 fps at 1920x1080 in desktop Chrome on the check machine; treat anything below 45 fps during the tour as a bug. Performance work exists so you can afford MORE detail and life, not less: instancing, chunking, LOD, GPU particles, baked lighting where it helps.
- POLISH: no z-fighting, no flicker, no seams or holes between chunks, no floating objects, no vehicles clipping through the ground or each other, no popping, no black or empty frames, no stretched textures.

==================================================
3. CAMERA AND PRESENTATION
==================================================
- The diorama presents itself. On load, with no click needed, a slow cinematic auto-tour starts. The whole diorama, or at least most of it, stays in frame at all times. The tour may glide closer past interesting moments, but it always returns to the full view. It never dives into the terrain, never goes under water, never fills the frame with a single object.
- The tour runs at least 60 seconds before it repeats, and it loops seamlessly.
- The first mouse drag or wheel event hands control to the viewer: orbit, zoom and pan, limited so the diorama always stays in view. A visible "Replay tour" button restarts the tour.
- Minimal on-screen UI so the diorama fills the frame. All user-facing text in English. The URL parameter ?clean hides all UI completely.
- The first frame appears within 10 seconds of load. If building the world takes time, show a tasteful progress indicator.
- Sound is strongly encouraged: a procedural soundscape made with the Web Audio API or Tone.js (engines, jet flybys, surf, weapon fire, wind in the mountains), mixed with care. It starts on the first click and has a mute toggle. It must be genuinely audible, not just a gain value that is set.

==================================================
4. YOUR TOOLBOX
==================================================
There is NO internet access during this run. Everything you may use is already on this machine:
- Node.js (LTS) and npm with a local package mirror. `npm install <package>` works for exactly these packages (pinned versions, listed in /toolbox/TOOLBOX.md):
  three (including three/addons: controls, EffectComposer and its passes, CSM cascaded shadows, Sky, Water, BufferGeometryUtils, SimplexNoise, ImprovedNoise, GPUComputationRenderer, LUT tools, VOXLoader; and three/webgpu with TSL) · postprocessing · n8ao · @dimforge/rapier3d-compat · cannon-es · three-mesh-bvh · simplex-noise · camera-controls · tone · vite · lil-gui
- Offline documentation: /toolbox/docs/three.js (the full three.js repository: documentation and the source of all official examples), plus the READMEs and type definitions inside node_modules. Read them; do not guess APIs.
- Python 3 with numpy and Pillow, ImageMagick, ffmpeg, git.
- `look` — your eyes. It starts your project with `npm start`, opens it in a real Chrome at 1920x1080 and reports: screenshots at chosen moments (default 2, 8, 20 and 45 seconds) saved to .look/, console errors and warnings, uncaught exceptions, failed requests, average fps and worst 1% frame time, share of near-black pixels per screenshot, the real audio output level after one simulated click, and draw calls and triangles if your page exposes `window.__diorama = { renderer }`. Options: `look --at 1,5,30` (moments in seconds), `look --drag` (simulates a drag and a wheel zoom to test the hand-over to manual control). If you can view images, open the screenshots and judge them with the eye of a demanding art director. If you cannot view images, rely on the numbers and on careful reasoning about your code.
- `timeleft` — prints the exact time remaining in your budget.
You may write your own scripts and tools (for example a voxel model builder, a texture or LUT baker, a profiling overlay) and use any Web API the browser offers: WebGL2 is the safe default; WebGPU is allowed if it runs in the check browser.

==================================================
5. HOW TO WORK
==================================================
1. Plan (first 10 to 15 minutes): read the docs you need. Write PLAN.md: art direction (palette, light mood, the terrain sequence from snow to surf), world size, architecture, the list of vehicles and what each one does, the performance strategy, and a time plan across the whole budget.
2. Build the complete piece early at decent quality: base with strata, all terrains, water, at least a first version of every vehicle type in motion, the camera tour. Run `look`. Commit. A complete diorama you then deepen beats a half-finished one.
3. Then improve in passes until the time is up. Each pass: run `look`, study the screenshots and numbers, write down in NOTES.md the three weakest things a viewer would notice first, fix or upgrade them, run `look` again, commit when it is better.
4. Keep NOTES.md as your memory: what is done, what is next, what you learned. Your context may be compacted during a long run; the files are what you keep.
5. Check `timeleft` regularly. In the last 15 minutes stop adding features and make sure your last commit is the best, fully working version.
6. Never ask questions. Never stop early: as long as time remains, the piece can get better.

Showcase pieces like this usually fail in these ways. Check for every one of them: a black or empty frame; a camera that sits too close or clips into terrain; shader compile errors; lighting so flat that the voxels read as mush; water that does not move; vehicles that slide instead of drive, or fly without banking; effects that pop in and out; audio that "plays" at zero level; frame drops during explosions; a file or feature left half-written.

==================================================
6. DELIVERY
==================================================
- Your working directory is the project. It is a git repository. When the time budget ends, your LAST COMMIT is what counts, so commit only runnable states.
- `npm start` serves the finished diorama at http://localhost:8080 with the network disabled. Everything it needs is inside the project folder (a built dist/ served statically is ideal). Nothing is fetched from the internet at view time.
- README.md: what the diorama shows, how to run it, the controls, the libraries used.
- Everything visible and audible is made by you in code or by your own scripts. No downloaded or pre-made 3D models, textures or sounds.
- Do not modify anything outside your project folder.
- Your final message is exactly one line: DONE <absolute path of the project> | npm start | http://localhost:8080

---
WORKBENCH FOR THIS RUN (identical for every model; it replaces any workbench, helper commands, /toolbox paths or offline caches named above):
- You work on a Mac inside this folder. Work only inside this folder.
- The bench-* helper commands and /toolbox do not exist here. You have Node.js with npm (online), Python 3 and a shell. You may install npm packages, including Playwright for your own screenshots.
- Serve your result on port 8121. Other runs use other ports.
- Your time budget is 4 hours and ends at 11:10 local time. Check the time with the date command.
- No image, music or video generation models. Nobody will answer questions.

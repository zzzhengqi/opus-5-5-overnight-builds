CHRONO CITY
One city block, five decades. A briefing for a long, autonomous build.
Read the whole briefing before you start.

WHAT THIS IS
You are the lead developer, technical artist and art director of a small, elite real-time graphics studio, working alone in a fully equipped workshop. You have four hours of uninterrupted time, a shell, a browser you can take screenshots with, and the libraries and tools listed under THE WORKSHOP. Nobody will answer questions and nobody will look at your work before the time is up. Your result will be shown side by side with the results of others who received exactly this briefing, exactly this workshop and exactly this much time.
Build the most impressive thing you are capable of. The bar is not "it runs without errors". The bar is a viewer who stops scrolling and cannot believe this was built by an AI in a few hours. Aim for the look and the life of a finished AAA game or an animated feature film, never a prototype or a tech demo, and push every part of it as far as you can.

THE VISION
"Chrono City" is a real-time 3D scene of one city block: the same block, the same street corners, in 1945, 1965, 1985, 2005 and 2025. The viewer watches this one place live through the decades. Every era is unmistakably its own year and full of the people, the shops and the street life of its time. The weight of this piece lies in its life: a street that feels inhabited in every single year.

THE BLOCK
- One city block with its streets, sidewalks and corners, modeled in real detail. You choose the city and the country. Commit to them and make every era true to that place and that year: architecture, storefronts, lettering, colors, materials, clothing and transport. Each era must be recognizable at first glance, from the wide shot alone.
- Choose a place where everyday civilian life went on in all five years.
- The block and every business on it are invented. No real brand names, shop names or logos anywhere, including on vehicles and signs. No military, no weapons, no political or extremist symbols.
- It is always recognizably the same place: the same street layout, the same lots, the same corners. The block evolves the way real places do. Some buildings live through every era and visibly age; they get new storefronts, signs, paint, windows and renovations. Others are torn down and replaced. Heights, density and materials change as the city changes. Never re-skin one set of buildings five times.
- Real detail wherever the camera can go: facades with depth (recessed windows, frames, sills, cornices, doors, gutters, roof details), sidewalks and street surfaces with curbs, seams and wear, and weathering that accumulates as buildings age.

LIFE IN EVERY ERA
- Shops of the time: the kinds of businesses that existed on such a street in that year, with period signage and lettering, window displays with recognizable goods, and interiors visible through lit windows. Signs are crisp and readable at street level.
- People on the sidewalks, dressed for their era: silhouettes, garments, hats, hairstyles, colors and what they carry. Each person has somewhere to go. They walk at their own pace, stop, look into windows, talk in small groups, cross the street, enter and leave shops. Walking is animated with a real gait (legs, arms, weight). Nobody slides, nobody marches in lockstep, nobody walks through anyone else.
- The way people get around in that year, moving through the street with weight: accelerating, braking, turning. In 1945 a streetcar runs on its tracks through the block; it stops, people get on and off, and it pulls away. Whether the streetcar survives into the later eras is your call, based on the real history of the place you chose. Whatever replaces it or joins it is just as true to its year.
- Birds in the air, on the rooftops and on the ledges. They flap, glide, land and take off again.
- The small signs of life that make a street feel inhabited.

THE CHANGE OF ERAS
- Changing eras is an event, never a cut or a crossfade. The block visibly transforms from one year into the next: buildings rise, age, are refaced or come down and are replaced; storefronts and signs change over; the people and vehicles of the old era give way to those of the new one.
- The timeline is a scrubber. When the viewer drags its handle, time follows the handle continuously in both directions, and the transformation plays forward or backward like a film being scrubbed.

THE LOOK
Physically based materials that read as what they are: brick, stone, plaster, wood, glass, metal, asphalt and paint, in every state from new to worn. Soft, stable shadows and ambient occlusion. A real sky with atmosphere and depth haze. Light from windows and signs, with bloom where it glows. Anti-aliased edges. Light, time of day and the visual mood of each era are yours to design; give every era its own color grade. No placeholder shapes, no flat untextured surfaces, no visibly repeating textures, no z-fighting, no flickering shadows, no popping objects. Nothing may look like plain boxes.

SOUND
Using the Web Audio API (Tone.js is available): a street soundscape and an original piece of music for each era, both changing with the era and blending during the transformations and while scrubbing. Audio starts on the first click. A mute button.

PRESENTATION CONTRACT (fixed, so that all results can be compared second by second)
- On load, without any click, an automatic tour starts at 1945 and moves forward era by era. Every era holds for exactly 10 seconds and every transformation takes exactly 4 seconds, timed by the clock (performance.now), never by frame count. After 2025 the block transforms back to 1945, so the tour loops every 70 seconds.
- During the tour the camera moves slowly around the block and the whole block stays in view at all times. It may drift closer to street level, but never so close that the block as a whole leaves the frame.
- A plain click without dragging only starts the audio; it does not pause the tour.
- Dragging, scrolling, the timeline or the keys 1 to 5 pause the tour and hand over a free camera: orbit, pan, and zoom from the whole block down to street level. A "Play tour" button resumes the tour.
- The URL parameter ?era=1965 (or any of the five years) opens the page paused on that era, framed as in the tour.
- The current year is always visible. All on-screen text is in English. No title screen; if loading takes longer than a second, show a minimal progress bar and nothing else.
- From the moment the page loads, expose window.CHRONO: CHRONO.state() returns { year, phase: "hold" or "transition", progress from 0 to 1, touring as true or false, fps }; CHRONO.goto(year) jumps to an era and pauses; CHRONO.tour(true or false) starts or stops the tour. The recording is automated through this API.
- Performance target: a stable 60 fps at 1920x1080 in desktop Chrome with WebGL2 on one high-end desktop GPU (RTX 5090 class). WebGPU may not be available on the playback machine. No console errors. Use instancing, merged geometry, texture atlases and levels of detail wherever they buy you frame time for more detail.

THE WORKSHOP
- Your working directory is /work/chrono-city. Everything you deliver lives there. TOOLBOX.md in that directory lists every installed tool with its exact version.
- Node.js (LTS) with npm. You may install packages from the npm registry; the registry is pinned to a fixed date in .npmrc, do not change that. Already in the local cache: three (with its official addons), postprocessing, n8ao, three-mesh-bvh, troika-three-text, yuka, gsap, tone, simplex-noise, @dimforge/rapier3d-compat, cannon-es, lil-gui, vite, @gltf-transform/cli, and the open-licensed font packages of @fontsource. Use whatever serves the vision; none of them is required.
- Python 3 with numpy, Pillow and scipy, for build-time generation of textures, atlases, normal maps, noise and data.
- Blender (headless, scriptable through Python/bpy, including Cycles) for procedural modeling, UV unwrapping, and baking ambient occlusion or lighting into textures, exported as glTF. Baking costs time; plan for it.
- A headless Chrome with GPU through Playwright, and the command shot:
  shot <url> --out <file.png> [--size 1920x1080] [--wait <seconds>] [--eval "<javascript>"]
  It saves a screenshot and prints the console messages and the average frame time it measured. You may write your own Playwright scripts too. The preview machine is not the playback machine: treat its frame times as a relative measure and keep headroom.
- git, ffmpeg, ImageMagick.
- If you can view images, look at your screenshots. If you cannot, do not open image files; verify through console output, frame times, CHRONO.state() and pixel statistics you compute yourself (for example mean brightness and the share of black pixels).
- Not available: the open internet (no web search, no web pages, no downloads except npm packages), other machines, and any image, 3D or audio generators. Everything the viewer sees and hears is made by you, in code, in build-time scripts or in Blender. No downloaded 3D models, textures, HDRIs, images or sound files. The only fonts are the npm font packages, bundled into the build.

HOW TO WORK
1. Plan first, for about 15 minutes. Write DESIGN.md: the city and why you chose it; a plan of the block (streets, lots, corners) with the fate of every building across the five eras; an era bible for each year (architecture, storefronts and lettering, clothing, transport, colors, light and mood, soundscape and music); the technical architecture (era state machine, transformation system, systems for people, vehicles and birds, instancing and levels of detail, performance budget); and a schedule of milestones with times.
2. Get a vertical slice running early. Within the first hour, one era with the block, the tour, the camera and the build into dist/ must work end to end. Commit.
3. Then widen: all five eras, the transformations and the scrubber, the life, the sound, and then pass after pass of polish. After every milestone: build, commit, take screenshots.
4. Review like a demanding art director. At every review take screenshots at 1920x1080 of all five eras and of at least one transformation in progress, as wide shots and at street level. Save every screenshot in progress/ with the elapsed time in its name, for example progress/1h40-1965-street.png. Ask yourself: Would this pass as a frame from a finished game or animated film? Is the year obvious at first glance? Is it clearly the same block? Where are placeholder shapes, flat lighting, empty areas, repeating textures, floating or intersecting objects, sliding feet, unreadable signs, black or blown-out frames? Is the frame time within budget? Fix the worst problem first, then review again.
5. Keep DESIGN.md current with what is done and what comes next, so you can continue seamlessly if your context is compacted.
6. Always keep a working build. From the first hour on, dist/ must work at every moment. Build and commit after every improvement.
7. Use all of the time. The run is stopped without warning when the time is up, and whatever is in dist/ at that moment is your result. Stopping early earns nothing. If you believe you are finished while time remains, you are not: take new screenshots, find the weakest era or the weakest element, and raise it.
8. Do not ask questions; nobody will answer. Make decisions, write them into DESIGN.md and move on. Use subagents if your environment offers them.

TIME
You have 4 hours of wall-clock time, starting at the timestamp in /work/chrono-city/START_TIME. Check the clock with `date` regularly. In the last 30 minutes add no new features: fix, polish, verify, build, commit.

DELIVERABLE
- /work/chrono-city with the source code, package.json and a built, static dist/ folder.
- dist/ runs completely offline: served with `python3 -m http.server 8080 --directory dist` and opened at http://localhost:8080/ without any network access. No CDN, no external requests of any kind.
- README.md: how to build and start, the controls, and the city you chose.
- DESIGN.md (plan and progress log), progress/ (your review screenshots) and THIRD_PARTY_LICENSES.md (the license of every bundled package and font).

Anything beyond this briefing that makes the scene more impressive is welcome. The block, its life and its change through the decades are the heart of it and must be outstanding. Go all out.

---
WORKBENCH FOR THIS RUN (identical for every model; it replaces any workbench, helper commands, /toolbox paths or offline caches named above):
- You work on a Linux machine inside this folder. Work only inside this folder.
- The bench-* helper commands and /toolbox do not exist here. You have Node.js with npm (online), Python 3 and a shell. You may install npm packages, including Playwright for your own screenshots.
- Serve your result on port 8131. Other runs use other ports.
- Your time budget is 4 hours and ends at 17:51 local time. Check the time with the date command.
- No image, music or video generation models. Nobody will answer questions.
- Headless Chromium on this machine uses the NVIDIA GPU only with the flags --use-angle=vulkan --enable-features=Vulkan --ignore-gpu-blocklist; without them it falls back to software rendering (SwiftShader).

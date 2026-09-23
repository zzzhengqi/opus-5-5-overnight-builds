PIRATE SHIP AT SUNSET · BRIEFING A (CINEMATIC SHOWCASE)

WHO YOU ARE AND HOW THIS WORKS
You are a senior real-time graphics engineer and technical artist, working alone in a long, uninterrupted session. You have a fully equipped workbench (described below), a fixed time budget, and no one to ask: nobody will answer questions and there is no second prompt. Plan, build, test, look at your own results, and keep improving on your own until your time budget is used up.

THE MISSION
Build the most impressive real-time 3D scene you are capable of: a pirate ship under full sail on the open sea at sunset, firing its cannons. It runs in a web browser.
Your result will be recorded and shown side by side with the same scene built by other AI systems under exactly the same conditions: the same brief, the same workbench, the same time budget. A human judges the recordings by eye. The goal is not "free of bugs". The goal is the most breathtaking scene you can make: it should look and move like the cinematic of a AAA game, not like a tech demo. There is no upper limit. Wherever you can go further than this brief describes, go further.

THE FOUR PILLARS
These are the heart of the scene. Each one must be outstanding on its own.

1 · THE SHIP
A three-masted age-of-sail pirate ship, modeled in real detail, built entirely by your own code.
- Hull: a properly curved hull with sheer, tumblehome and a sweeping bow. Visible planking with seams, wales and painted strakes, weathering, and a darker wet band at the waterline. Open gunports along both sides with the cannons run out. A raised forecastle and quarterdeck with rails, a carved and gilded stern with a gallery of glowing windows, stern lanterns, a bowsprit with jib boom, carved ornament at the bow.
- Deck: planked, with the details a real deck has: hatches and gratings, capstan, wheel, the guns on their carriages, coiled rope.
- Rig: three masts with tops and crosstrees, yards, and a full set of canvas: square sails on every mast plus jibs and a spanker. The sails are curved cloth bellied by the wind, with seams, reinforcement bands, stains and wear. They ripple and breathe in the gusts and glow warm when the sun shines through them.
- Rigging: shrouds with ratlines, stays and backstays, braces and sheets, blocks and deadeyes. Thin, dark, correctly anchored. Rigging is what separates a real ship from a toy.
- Flags: a black pirate flag with skull and crossed bones, and long pennants at the mastheads, streaming and fluttering in the wind.
- Lights: lanterns at the stern and on deck, glowing and gently swaying, throwing warm light onto the wood around them.
- Materials: physically based and believable up close: weathered and tarred wood, faded paint, gilding, iron, brass, hemp rope, heavy canvas.
- Motion: the ship is under way. It plows forward, rides the very waves you render with pitch, roll and heave, heels under the wind, throws spray at the bow, pushes a bow wave and leaves a long foaming wake that slowly widens and fades.
No placeholder shapes anywhere. Nothing the camera sees may read as a box, a stack of cylinders or a flat plane.

2 · THE CANNONS
The ship carries a full battery of cannons on both sides, and they fire.
- A broadside ripples down the hull gun by gun, never all in the same frame.
- Every gun recoils back on its carriage and is run out again.
- Every shot: a muzzle flash that briefly lights the hull, the sails, the smoke and the water around it; a burst of sparks and burning wadding; a thick cloud of powder smoke that billows out, is lit by the sunset and by the following flashes, drifts downwind and slowly thins away. The smoke looks soft and volumetric, never like flat sprites facing the camera.
- Every cannonball flies on a real ballistic arc with gravity and drag and inherits the ship's own motion.
- Where a ball hits the water, a splash column rises and collapses, droplets rain back, a foam patch spreads and ring waves travel outward.
- The recoil of a broadside makes the whole ship shudder and heel away from the guns.

3 · THE SEA
A living ocean all the way to the horizon.
- Waves at many scales at once: long swell, wind waves, chop and fine ripples, with sharp crests and rounded troughs, all moving with a believable wind.
- Whitecaps and foam that form on steep crests and dissolve again; foam streaks trailing downwind.
- Light glowing through the thin crests, emerald to turquoise against the warm sky.
- Sky reflections with a correct Fresnel falloff and a blazing, glittering path of sunlight.
- No visible tiling, repetition or seams anywhere, near or far. The far sea melts into atmospheric haze at the horizon.
- The sea reacts to the ship and the guns: bow wave, foam along the hull, wake, splashes, spray.

4 · THE SUNSET
- A low sun touching the horizon in a physically inspired sky: a rich gradient from gold through rose to violet, deepening overhead.
- Layered clouds lit from below, with glowing edges.
- Atmospheric haze and aerial perspective; shafts of light through rigging and smoke where they make sense.
- Warm rim light on sails and hull, backlit canvas, long shadows across the deck, stern windows and lanterns glowing against the dusk.
- A cinematic image: HDR rendering, filmic tone mapping, bloom on the sun, the flashes and the lanterns, careful color grading, clean anti-aliasing. Rich colors, no clipped highlights, no crushed blacks.

SOUND
What you see should also be heard, generated in code with the Web Audio API: deep cannon booms with a rolling echo across the water that arrive later the farther the camera is from the gun, the wash of the sea, wind in the rigging, creaking timber and rope, snapping canvas, splashes. A balanced mix without clipping. Audio starts on the first click anywhere on the page.

CAMERA AND SHOWCASE MODE
- On load the scene presents itself with a cinematic automatic camera that loops forever: a wide establishing shot of the whole ship against the sun, a low sweep along the waterline, a shot from astern following the wake, a pass along the guns while they fire, a high crane shot. Moves are smooth and eased, never jittery. The whole ship stays in view most of the time.
- The first broadside fires within the first ten seconds, then regularly, timed so that the camera catches them.
- The viewer can take over at any time: mouse to orbit and zoom, Space fires a broadside, C switches between automatic and free camera. After 20 seconds without input the automatic camera returns.
- The recorder clicks once after one second to unlock audio. That click must not change the camera or the showcase.
- Deterministic: the URL parameter ?seed=N (default 1) fixes all randomness and all showcase timing, so the same seed always gives the same sequence.
- No title screen, no menus, no HUD. Only a small controls hint in English that fades out after a few seconds.
- When everything is loaded, shaders are compiled and the first real frame is on screen, set window.__READY = true.

THE QUALITY BAR
- Detail: every surface the camera comes close to holds up.
- Light: the sunset drives every color in the scene; flashes and lanterns light their surroundings.
- Motion: nothing is frozen. Water, cloth, flags, lanterns, smoke, foam and clouds all move, each at its own natural pace.
- Physics: the ship's motion comes from the waves, cannonballs follow ballistics, smoke follows the wind.
- Polish: no flicker, z-fighting, popping, shimmering edges, banding, visible seams or sudden jumps.
- Performance: a stable 60 frames per second at 1920x1080 on the recording machine. Use the GPU well (instancing, merged geometry, level of detail, shaders, baked textures) and spend the performance on what the viewer sees.
- Depth before breadth: first make the four pillars outstanding. You are free to add anything else that makes this scene more impressive, as long as it belongs in this scene and never costs the pillars quality or frame rate.

YOUR WORKBENCH
Everything below is installed and identical for every AI system in this benchmark. Read ~/WORKBENCH.md first; it lists the exact versions.
- A Linux shell with full write access to the current working directory. git is available.
- No internet access. Everything you need is on this machine.
- Node.js (LTS) with npm and an offline package cache. Install any of these with npm install --offline <package>:
  three (including all official addons under three/addons: sky, water and ocean, EffectComposer and its passes, GPUComputationRenderer, BufferGeometryUtils, noise, controls, loaders and exporters)
  postprocessing (bloom, SMAA, tone mapping, god rays, depth of field)
  @dimforge/rapier3d-compat (rigid-body physics, WASM) and cannon-es (lightweight physics)
  three-mesh-bvh (fast raycasting)
  simplex-noise
  tone (Tone.js: audio synthesis and effects on top of Web Audio)
  lil-gui and stats.js (for your own tuning; hidden in the final scene)
  vite, esbuild, vite-plugin-singlefile, typescript (building and bundling)
- Offline documentation: the complete official three.js examples in node_modules/three/examples (study the ones about ocean, water, sky, postprocessing, instancing and GPGPU) and the manuals in ~/docs/.
- Python 3 with numpy, scipy and Pillow, for baking textures, normal maps, noise, color lookup tables or audio samples into files.
- Blender, headless on the CPU and scriptable through its Python API (bpy), for modeling or baking geometry and textures by script and exporting glTF.
- ffmpeg.
- Chrome with a real GPU, driven by these commands. Use them often:
  bench-serve                 serves ./dist at http://localhost:8000
  bench-shoot [url] [--at 2,6,12,20] [--size 1920x1080]
                              loads the page exactly like the recorder (one click after 1 s), waits for window.__READY, saves screenshots to ./shots/<time>/ and writes report.json there: console errors and warnings, WebGL and shader errors, load time, average and 1%-low frame rate, mean brightness, share of near-black pixels, amount of motion between frames
  bench-clip [url] [--seconds 12]
                              records a short video of the running page plus a strip of frames
  bench-timeleft              prints the minutes left in your time budget
- bench-shoot and bench-clip run on the same GPU and the same browser backend (Chrome on Linux, ANGLE over Vulkan, NVIDIA RTX) as the machine that will record your scene. What runs there runs in the recording.
- If you can view images, open the screenshots and frames with your file-reading tool and study them. If you cannot, work from report.json.

HOW TO WORK
You have a long session. Use all of it.
1. Orient. Read ~/WORKBENCH.md, run bench-timeleft, study the relevant three.js examples. Then write NOTES.md: your vision for the scene, the architecture, and a time plan.
2. Get the whole scene on screen early. Your first milestone is a rough but complete scene in dist/: sea, sky, a ship, one broadside, the automatic camera, checked with bench-shoot and committed. A complete rough scene beats a perfect hull on an empty screen.
3. Then improve in loops until the time is used up. Each loop: pick the weakest thing you can see, improve it, build, run bench-shoot or bench-clip, look, judge it against the quality bar, commit with a one-line message, and note in NOTES.md what changed and your honest verdict.
4. Judge like a director, not like a compiler. Ask of every screenshot: Would this frame work as key art for a game? Does anything read as a box, a flat plane or a straight line where there should be a curve? Does the hull read as planked, weathered wood? Do the sails read as heavy canvas filled by the wind? Is the rigging there, thin and anchored? Does the sea repeat or tile? Is the horizon hazy or a hard line? Does a muzzle flash light the hull, the sails and the water? Is the smoke soft and volumetric, and does it drift? Does the ship ride the waves or float above them? Is there flicker, aliasing, banding or popping?
5. Keep dist/ working at all times. Build and check after every change; if something breaks, fix it or roll it back with git before you move on. When the time runs out, whatever is in dist/ is your submission.
6. Your context may be compacted during the session. NOTES.md is your memory: keep the plan, what is done, what is next and the known problems up to date, and re-read it whenever you lose track.
7. Do not stop early. If you believe you are finished, you are not: open your latest screenshots, find the weakest visible aspect and improve it. Your git history will be replayed as a time-lapse of how the scene grew.
8. Final stretch: when bench-timeleft shows 20 minutes or less, add nothing new. Fix what is broken, run a full bench-clip, write README.md, make the final commit, then give the DONE line.

DELIVERABLE
In the current working directory:
- dist/index.html plus everything it needs inside dist/. dist/ runs completely offline from any static web server at its root, without a build step. Start command: bench-serve (or python3 -m http.server 8000 --directory dist), then open http://localhost:8000/.
- src/ with all your source code and every script you used to generate geometry, textures or sounds, so that the build can be reproduced with the commands in README.md.
- README.md: how to build and start, the controls, what you built and how, and every library you used with its license.
- NOTES.md: your working log.
- shots/: keep your check screenshots and clips.
- The git history of your work.

HARD RULES
- No downloaded or pre-made assets. Every mesh, texture, shader and sound comes from code you write in this session (JavaScript, GLSL, Python or Blender Python), generated at runtime or baked by your own scripts.
- WebGL2 in desktop Chrome. The page must not load anything from the network.
- All text on screen and in README.md is in English.
- Do not ask questions. Nobody will answer.

When you are done, the last line of your final answer is exactly:
DONE <absolute path to dist/index.html>

---
WORKBENCH FOR THIS RUN (identical for every model; it replaces any workbench, helper commands, /toolbox paths or offline caches named above):
- You work on a Mac inside this folder. Work only inside this folder.
- The bench-* helper commands and /toolbox do not exist here. You have Node.js with npm (online), Python 3 and a shell. You may install npm packages, including Playwright for your own screenshots.
- Serve your result on port 8111. Other runs use other ports.
- Your time budget is 3 hours and ends at 07:54 local time. Check the time with the date command.
- No image, music or video generation models. Nobody will answer questions.

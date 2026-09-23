# Chrono City — one Toronto block, five decades

A real-time WebGL2 scene of one invented city block in **Toronto, Canada** — the corner of *Dundry Street* (a
streetcar main street in the spirit of Queen Street West) and *Bellwood Avenue* — shown in **1945, 1965, 1985, 2005
and 2025**. The block transforms between eras: buildings are refaced, age, are demolished and rise again, the people,
cars and streetcars of each year give way to the next, and light, colour grade, music and street sound change with it.
All streets, buildings, businesses and names are invented.

## Build & run
```bash
npm install
npm run build                                   # -> dist/
python3 -m http.server 8080 --directory dist    # open http://localhost:8080/
```
`dist/` is fully static and offline (fonts bundled, everything else procedural). Dev server: `npm run dev` (port 8131).

## Controls
- On load an automatic tour runs: every era holds 10 s, every transformation takes 4 s, 2025 transforms back to 1945 (70 s loop).
- **Click** anywhere: starts the audio (does not pause the tour). **Sound on/off** button mutes.
- **Drag** to orbit, **right-drag** to pan, **scroll** to zoom down to street level — this pauses the tour.
- **Timeline**: drag the handle to scrub through time in both directions; click a year.
- **Keys 1–5**: transform to 1945 / 1965 / 1985 / 2005 / 2025. **Space**: pause / resume the tour.
- Tip: zoom all the way down onto the Dundry Street sidewalk — shop windows, the theatre queue, the streetcar stop and
  the street characters of each year are built for street level.
- **Play tour** button resumes the tour.
- URL `?era=1965` (or any of the five years) opens paused on that era.

## Automation API
`window.CHRONO.state()` → `{ year, phase: 'hold'|'transition', progress, touring, fps }`,
`CHRONO.goto(year)` jumps to an era and pauses, `CHRONO.tour(true|false)` starts/stops the tour.

## The city
Toronto is one of the few big cities where ordinary street life simply went on through 1945, and where the streetcar
never left: the same kind of red streetcar line runs through every era (a Peter-Witt style car in 1945, a PCC in 1965,
the boxy CLRV in 1985, the articulated ALRV in 2005 and a long low-floor tram in 2025). Victorian brick main streets,
bay-and-gable houses, a garment factory that becomes lofts, the 1965 modernist office, the corner gas station that becomes
a condo, the glass tower of the 2020s behind a retained theatre facade — all typical of how Toronto actually changed.

## How it was made
Everything is procedural and generated at load time: textures (in a Web Worker), buildings (facades with real openings,
interior-mapped rooms and shops), signs (canvas atlases with bundled open fonts), people, vehicles, streetcars, birds,
trees, props, sky, and all music and sound (Web Audio). Tools used during development: `tools/shot.mjs` (screenshots),
`tools/tour.mjs`, `tools/interact.mjs` (interaction contract test), `tools/hitch.mjs` (70 s frame-time log),
`tools/build.sh` (build + headless smoke test + swap into `dist/`).

See `DESIGN.md` for the plan, era bible, technical architecture and progress log; `progress/` holds review screenshots.

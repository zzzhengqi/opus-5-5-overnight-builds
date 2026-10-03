# Fall Line 简体中文试玩

[进入中文版](https://zzzhengqi.github.io/opus-5-5-overnight-builds/fall-line/) · [试玩首页](https://zzzhengqi.github.io/opus-5-5-overnight-builds/)

本 Fork 已汉化 Fall Line 的界面、按钮、地图、操作说明、赛事、结算、动作提示与场景文字。按任意键开始，`M` 打开地图，`Esc` 暂停并查看操作说明。其余三个项目保留原版。

汉化词表位于 `fall-line/zh-CN.js`。显示层翻译保留内部玩法标识与 `fallline.pb.v1` 存档格式。

---

# Claude Opus 5.5, four overnight builds

**Live: https://zzzhengqi.github.io/opus-5-5-overnight-builds/**

Each build got one detailed brief and a time budget. Claude Opus 5.5 then worked alone in
Claude Code: planning, writing code, taking its own screenshots, fixing what it saw. Nobody
answered questions, nobody touched the code. All four stopped on their own before the budget ran out.

| Build | What it is | Work time | Commits |
|---|---|---|---|
| [Fall Line](https://zzzhengqi.github.io/opus-5-5-overnight-builds/fall-line/) | Freeride snowboard and ski game, drop-in map, tricks, events | 339 min of 6 h | 111 |
| [Operation Tidewater](https://zzzhengqi.github.io/opus-5-5-overnight-builds/tidewater/) | Living voxel diorama with a cinematic tour | 205 min of 4 h | 65 |
| [Chrono City](https://zzzhengqi.github.io/opus-5-5-overnight-builds/chrono-city/) | One Toronto block through five decades | 164 min of 4 h | 66 |
| [Pirate Ship at Sunset](https://zzzhengqi.github.io/opus-5-5-overnight-builds/pirate-ship/) | Real-time cinematic, broadsides on Space | 137 min of 3 h | 86 |

Each folder is the build exactly as the model shipped it (static, runs offline).

## The prompts

`briefs/<build>-prompt-as-sent.md` is the full prompt each run received, word for word, including
the workbench note appended at the end. `briefs/<build>-model-readme.md` is the README the model
wrote about its own build.

## Run conditions

- Model: Claude Opus 5.5, effort xhigh, Claude Code headless, no MCP servers, fresh session per build
- No image, music or video generation models. Everything is procedural code.
- Chrono City ran twice: the first attempt was stopped because the machine was overheating, this is the fresh second run with the same brief.
- Fall Line's brief asked it to recreate the gameplay of a well known freeride game without using its name or any of its assets.

## Credits

Fonts in Chrono City come from Google Fonts via Fontsource (SIL Open Font License). Three.js and the
other libraries are listed in each build's own README.

## What this is not

One brief, one run per build, judged by looking at the result. Not a benchmark suite.

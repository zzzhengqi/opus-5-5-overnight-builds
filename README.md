# Fall Line 简体中文试玩

[中文版短地址](https://zzzhengqi.github.io/20261003-4/) · [原试玩地址](https://zzzhengqi.github.io/opus-5-5-overnight-builds/fall-line/) · [试玩首页](https://zzzhengqi.github.io/opus-5-5-overnight-builds/)

短地址由 [20261003-4 仓库](https://github.com/zzzhengqi/20261003-4) 提供，游戏内容与原地址相同。更新试玩时，须将本仓库 `fall-line/` 下的三个游戏文件同步到短地址仓库根目录。

本 Fork 已汉化 Fall Line 的界面、按钮、地图、操作说明、赛事、结算、动作提示与场景文字。按任意键开始，`M` 打开地图，`Esc` 暂停并查看操作说明。其余三个项目保留原版。

默认开启明显的暴雪与粉紫晚霞：`N` 切换晴天和暴雪，`H` 切换清晨和晚霞。雪花密集分布在视野附近，放大近处雪片，并在快速滑行时持续补充。

`B` 装备或卸下双推进器火箭单板；按住 `F` 推进，松开后冷却并补充燃料。刹车、摔倒、回放或打开菜单会停止推进；过热后须降温才能再次启动。手柄十字键右切换火箭板、左按住推进。画面底部也有中文切换按钮。

默认开启空中回正与落地辅助：松开方向键后更快收住旋转、对齐落地坡面；倾斜、横向落地与中等冲击有更大的容错，并延长落地后的板刃保护。倒栽、猛烈冲击和撞障碍仍会摔倒。游戏内右键无任何响应，不弹出浏览器保存图片菜单。

左下角按键说明和底部中央天气／火箭面板，都可选择“固定显示”或勾选“隐藏”。隐藏时面板及选项一起消失，不保留小按钮；鼠标移入原面板范围时显示，移开再次隐藏。点击“固定显示”恢复常驻。两个面板分别记住选择，隐藏说明不影响滑行快捷键。

第一人称沿实际滑行方向平滑跟随，去除头部动画的左右晃动。摔倒后在倒地位置附近寻找避开障碍物、坡度较缓的地点自动起身；没有安全点记录时也不会退回出发点。手动重置和重新开始赛事沿用原操作。

雪花在世界坐标中持续下落，受风力影响并在接触地形后回收；暴雪加入阵风、贴地风吹雪、雾和风声。晴天关闭悬浮发光尘粒，近处雪面增加固定在地形上的细颗粒纹理。扩展位于 `fall-line/mountain-upgrade.js`，沿用原游戏的地形、物理、音量控制和渲染器。

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

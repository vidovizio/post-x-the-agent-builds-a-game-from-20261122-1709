# makefun-crow-mountain-comet

A 2D browser game, one static HTML file, no libraries, no build step — written from a single prompt by an AI coding
agent, and filmed while it worked. The video ends on make.fun's referral end card with referral code `ynfr7a93`.

<a href="https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709"><img src="https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg" alt="make.fun bounty" height="28"></a>
<a href="https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709"><img src="https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/setyamickala/makefun-crow-mountain-comet/rank.svg" alt="rank on this bounty" height="28"></a>
<a href="https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709"><img src="https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/setyamickala/makefun-crow-mountain-comet/reward.svg" alt="reward" height="28"></a>

Referral code: **ynfr7a93** — <https://make.fun/r/ynfr7a93>

## The entry

The entry is the post on X. This repository hands in that post's address:

- `POST.json` — the post's address (`{"url": "https://x.com/<handle>/status/<id>"}`).
- `main.ts` — copies `POST.json` from this repository to `/output/POST.json`. That is all it does.
- `.makefun/owner.json` — the wallet the prize is paid to.

The video is posted natively on X from a public account, with `@makefunai` and the bounty link in the text.

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## The game

`crow-mountain.html` — a single static file, opened straight in a browser:

    open crow-mountain.html        # or: python3 -m http.server

Steer the crow over the ridge, collect the falling shards, dodge the void rocks. Arrow keys / W-S / touch: up and
down. Scoring, combo decay and hazards all run off a seeded RNG, so a given run replays identically.

## Licence

MIT — see `LICENSE`.

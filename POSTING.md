# Posting the meme (do this from a phone, on X)

The meme cannot be submitted until it is posted on X — the post itself is the
entry. Post it from a **public** X account (posts not protected), between the
bounty's opening (19 Nov 2026 14:00 UTC) and its deadline (**23 Nov 2026 14:00 UTC
/ 21:00 WIB**). Keep the post up and the account public until the results are out.

## The picture

`meme.png` in this repository (also at `~/workspace/makefun/gta6-meme-x-01-entry/meme.png`).
Attach it as the post's picture (PNG — not a GIF or video). It must be the
post's **first** picture.

## The exact post text (copy-paste)

> Rockstar: GTA 6 delayed... again 😭 Me: still waiting since 2013. Meanwhile my AI agent earns real money on make.fun — agents win cash in bounties 💰 @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-manatee-mantis-onyx

Why each part is there:

- `make.fun` as a link to the bounty page, plus the `@makefunai` tag — either
  one passes the link/mention rule; both are included.
- `makefun-manatee-mantis-onyx` — this account's play code for this bounty
  (code 0 of 4; any one passes). It proves the poster holds the make.fun account.
- The money line ("earns real money on make.fun — agents win cash in
  bounties") is the pitch the judge weighs after the joke.

## After posting

1. On the post, tap Share → Copy link. The address looks like
   `https://x.com/<handle>/status/<digits>`.
2. Put exactly that address in `POST.json` as `{"url": "..."}` and commit it.
3. Then the entry can be bundled, checked and submitted (1 submit is enough —
   this is the probe; the rest of the day's quota is saved for a final version
   near the deadline).

## Why this is not submitted yet

Every X account the user holds is currently suspended, so there is no public
account to post from right now. Posting needs a working public X account —
from the phone, by the user. Do **not** invent a post URL: the house reads the
post through X's public embed before grading, and a made-up address fails the
entry_link check and burns a submit.

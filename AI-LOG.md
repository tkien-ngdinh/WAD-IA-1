## 2026-09-29 - harness and brief
- Tool: Claude (claude.ai chat, Sonnet 5.5).
- Asked for: a step-by-step guide from the rubric and README, drafts of the rules file, .prettierrc, the format scripts, ci.yml and BRIEF.md, and help with errors (rejected git push, Prettier warnings).
- Kept: the harness drafts and BRIEF.md.
- Changed: named the rules file AGENTS.md because I use opencode, on Claude's advice; added endOfLine to .prettierrc on Claude's suggestion after Prettier warned on my machine; updated the file name in BRIEF.md.
- Rejected: the complete cart.js, test file and zip that Claude also wrote in the same chat, because I wanted to practise with opencode.
- By hand: created the repository, copied the drafts into files, ran npm test and npm run format, made the commits.

## 2026-09-29 - cartTotal and tests
- Tool: opencode (LongCat 2.5 Preview Free).
- Asked for: I gave it BRIEF.md and asked for a plan first, then cartTotal and its tests.
- Kept: cart.js and 8 new tests as generated (the starter test stays, 9 in total), commit <hash-opencode>.
- Changed: nothing at this stage.
- Rejected: nothing.
- By hand: wrote the prompt, reviewed the plan and the diff, ran npm test and npm run format, tried two mutations (>= to >, removing Math.round) and saw tests fail, checked CI green on <hash-opencode>.

## 2026-09-29 - review, fixes and this log
- Tool: Claude (same chat).
- Asked for: a review of my repository, commit history and this log against the rubric and the template, and an explanation of why the tests pass.
- Kept: its two findings: cart.js treated any subtotal of 0 as an empty cart, and the rounding test could not tell Math.round from Math.floor.
- Changed: applied both fixes in commit f5e881a following Claude's instructions: I rewrote the empty-cart check to use items.length before the loop, from its description; the rounding test (price 100010, expected 108011) and the free-item test use the numbers and test code Claude gave me. Claude also drafted the wording of this log; I checked each line against git log and reviewed the docs.
- Rejected: nothing rejected.
- By hand: applied the changes, ran npm test and npm run format on my machine, CI green on f5e881a. Claude ran my pasted cart.js and tests in its own sandbox and reported 10/10 passing and all its deliberate breakages caught.

## 2026-09-30 - self-assessment report and log wording
- Tool: Claude (same chat).
- Asked for: a full check of the assignment and rubric requirements, a draft of SELF_ASSESSMENT_REPORT.md (rows, evidence lines, a conservative range of marks), and the wording of the entries in this log in the template's format.
- Kept: the report layout and the evidence lines, after I checked each against the repository and the Actions page; the log entries, with my edits.
- Changed: I chose the final marks myself.
- Rejected: nothing rejected.
- By hand: filled in the commit hashes, checked every claim against git log and CI, wrote "what I did not manage", made the commits.
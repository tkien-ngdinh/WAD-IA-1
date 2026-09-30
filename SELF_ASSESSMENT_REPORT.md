# Self-assessment — IA#1

Submitted by: 24120195 - Nguyễn Đình Trung Kiên
Total I claim: 90 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 28 | src/cart.js; npm test 10/10; test "the example from the slides" expects 467400; tests for the threshold, the empty cart and RangeError; test "a cart with only a free item still pays shipping" |
| Tests | 20 | 18 | test/cart.test.js: 10 tests covering the worked example, number type, empty cart, threshold (equal and just below), rounding, negative price, qty 1.5, qty 0, a cart with only a free item |
| Harness | 20 | 18 | AGENTS.md (stack, commands, never list); package.json scripts test and format; .github/workflows/ci.yml; green CI run on commit <hash-fix> |
| Brief | 15 | 14 | BRIEF.md: files it may touch, contract, error cases, "no dependencies" |
| AI-LOG.md | 15 | 12 | AI-LOG.md: four entries in the template format, hashes match git log; thinner where I wrote an entry after the stage |
| **Total** | 100 | 90 | |

## What I did not manage

I cannot see the grader's own test cases. My 10 tests come from the README and the rubric, and behaviour the README leaves open (where rounding happens, missing options) follows my own decisions in BRIEF.md. The format gate runs Prettier through npx and I did not ask the teacher whether that counts as a dependency. I wrote the AI-LOG entries after each stage, not while I was working, and the first version of the last entry was written before the review it describes, so I corrected it.

## What I would do differently

Write each AI-LOG entry right after the stage instead of after finishing. Read the generated code more slowly: I only found the subtotal === 0 shortcut and the weak rounding test in a later review. Ask the teacher about Prettier before adding it.
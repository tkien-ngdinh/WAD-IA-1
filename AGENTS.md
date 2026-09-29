# Project rules

Project: `cartTotal(items, options)` for CSC13008 IA#1. One function, one test file.

Stack: Node 22 or newer, plain JavaScript, ES modules (`"type": "module"` in package.json). No TypeScript, no framework.
Dependencies: none. Not in `dependencies`, not in `devDependencies`. Tests use `node:test` and `node:assert/strict` only.
Formatting: Prettier 3.3.3, run through `npx`, never installed into package.json. No semicolons, single quotes, trailing commas.

Commands:
- `npm test` runs the tests
- `npm run format` checks formatting
- `npm run format:fix` fixes formatting

Files:
- `src/cart.js` holds `cartTotal`, named export
- `test/cart.test.js` holds its tests
- nothing else may be created in `src/` or `test/`

Spec: `README.md` is the source of truth. The worked example must return `467400`.
Code style: no comments, short readable functions, no clever one-liners.
Tests: assert the specification, never the implementation. One reason to fail per test.
Errors: a negative price, or a qty that is not a positive integer, throws `RangeError`. Never return `NaN` or a string.

Never:
- add a dependency or devDependency
- round with `toFixed`
- edit `README.md`, or change package.json scripts, unless asked
- commit `node_modules/` or `.env`
- delete or weaken a failing test to make it pass

Done means: `npm test` green, `npm run format` clean, the diff touches only the files listed above, CI green after push.
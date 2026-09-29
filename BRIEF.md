# Brief

Implement `cartTotal(items, options)` in `src/cart.js` and its tests in `test/cart.test.js`.

## Files you may touch
- `src/cart.js`
- `test/cart.test.js`

Do not touch `README.md`, `package.json`, `.prettierrc`, `CLAUDE.md`, `.github/`, or any other file.

## Contract
- `items`: array of `{ name, price, qty }`
- `options`: `{ vatRate, freeShipFrom, shipFee }`
- `subtotal` = sum of `price * qty`
- VAT = `subtotal * vatRate`
- shipping = `0` when `subtotal >= freeShipFrom`, otherwise `shipFee`
- return `subtotal + VAT + shipping` as a **number**, rounded once at the end to the whole dong with `Math.round`
- named export, plain JavaScript, ES modules

Worked example: 2 x 180000 + 1 x 45000 = 405000 subtotal, VAT 32400, shipping 30000 -> `467400`.

## Error cases and edge cases
- empty cart: return `0`, no VAT, no shipping
- `price` negative or not a finite number: throw `RangeError`
- `qty` not a positive integer (0, negative, 1.5): throw `RangeError`
- a missing option falls back to: `vatRate` 0, `freeShipFrom` never free, `shipFee` 0

## Constraints
- **No dependencies.** Do not add anything to package.json. Tests use `node:test` and `node:assert/strict` only.
- Do not invent libraries, helper files or extra exports.
- Do not use `toFixed`; it returns a string.
- No comments in the code.
- Formatting: no semicolons, single quotes, trailing commas (Prettier config is in `.prettierrc`).

## Tests
Cover: the worked example, the result is a number, empty cart, subtotal exactly at the threshold, subtotal just below it, rounding, negative price, qty 1.5, qty 0. Each test has one reason to fail and asserts the specification, not the implementation.

## Done means
`npm test` green, `npm run format` clean, diff touches only the two files above.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('returns a number', () => {
  const items = [{ name: 'x', price: 1000, qty: 1 }]
  const result = cartTotal(items, {})
  assert.equal(typeof result, 'number')
})

test('empty cart returns 0', () => {
  assert.equal(cartTotal([], {}), 0)
})

test('subtotal exactly at threshold gets free shipping', () => {
  const items = [{ name: 'x', price: 500000, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 500000)
})

test('subtotal just below threshold pays shipping', () => {
  const items = [{ name: 'x', price: 499999, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 529999)
})

test('rounds to whole dong', () => {
  const items = [{ name: 'x', price: 100005, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: Infinity, shipFee: 0 }
  assert.equal(cartTotal(items, options), 108005)
})

test('negative price throws RangeError', () => {
  const items = [{ name: 'x', price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, {}), RangeError)
})

test('qty 1.5 throws RangeError', () => {
  const items = [{ name: 'x', price: 100, qty: 1.5 }]
  assert.throws(() => cartTotal(items, {}), RangeError)
})

test('qty 0 throws RangeError', () => {
  const items = [{ name: 'x', price: 100, qty: 0 }]
  assert.throws(() => cartTotal(items, {}), RangeError)
})

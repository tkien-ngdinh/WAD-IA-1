export function cartTotal(items, options) {
  const { vatRate = 0, freeShipFrom = Infinity, shipFee = 0 } = options ?? {}

  let subtotal = 0
  for (const item of items) {
    if (!Number.isFinite(item.price) || item.price < 0) {
      throw new RangeError('price must be a non-negative finite number')
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('qty must be a positive integer')
    }
    subtotal += item.price * item.qty
  }

  if (subtotal === 0) return 0

  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  return Math.round(subtotal + vat + shipping)
}

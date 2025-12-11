export function formatPrice(price: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
}

export function formatPriceSimple(price: number): string {
  return `$${price.toFixed(2)}`;
}

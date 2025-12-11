/**
 * Get a product image URL with fallback to placeholder
 */
export function getProductImage(productId: string, index: number = 0): string {
  // Use placeholder.com for demo images
  const width = 800;
  const height = 1000;
  const colors = ['2c2c2c', '8B7355', 'D4C5B9', '1a1a1a', '4A4A4A'];
  const color = colors[index % colors.length];
  
  return `https://via.placeholder.com/${width}x${height}/${color}/ffffff?text=Product+${productId}`;
}

/**
 * Get a collection image URL with fallback
 */
export function getCollectionImage(collectionName: string): string {
  const width = 600;
  const height = 800;
  return `https://via.placeholder.com/${width}x${height}/CDB892/ffffff?text=${encodeURIComponent(collectionName)}`;
}

/**
 * Get hero image URL
 */
export function getHeroImage(): string {
  return 'https://via.placeholder.com/1920x1080/0a0a0a/ffffff?text=Luxury+Fashion';
}

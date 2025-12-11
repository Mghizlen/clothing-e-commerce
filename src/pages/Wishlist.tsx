import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { useWishlist } from '../contexts/WishlistContext';
import { products } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';

export default function Wishlist() {
  const { items: wishlistItems } = useWishlist();
  const wishlistIds = wishlistItems.map((item) => item.productId);
  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <Container className="py-12">
      <h1 className="font-heading text-4xl font-bold mb-8">Wishlist</h1>

      {wishlistProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-6">Your wishlist is empty</p>
          <Link to="/products">
            <Button>Shop Now</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              slug={product.slug}
              name={product.name}
              brand={product.brand}
              price={product.price}
              image={product.images[0]}
              images={product.images}
            />
          ))}
        </div>
      )}
    </Container>
  );
}

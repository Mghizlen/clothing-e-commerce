import { Container } from '../layout/Container';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Array<any>;
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            slug={product.slug}
            name={product.name}
            brand={product.brand}
            price={product.price}
            image={product.images[0]}
            images={product.images}
            onQuickAdd={() => {
              console.log('Quick add:', product.id);
            }}
          />
        ))}
      </div>
    </Container>
  );
}

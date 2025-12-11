import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { ProductGallery } from '../components/product/ProductGallery';
import { VariantSelector } from '../components/product/VariantSelector';
import { AddToBag } from '../components/product/AddToBag';
import { useProductBySlug } from '../lib/queries';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { formatPriceSimple } from '../lib/priceUtil';

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const { data: product } = useProductBySlug(slug || '');
  const [selectedColor, setSelectedColor] = useState<string>();
  const [selectedSize, setSelectedSize] = useState<string>();
  const [_zoomImageIdx, setZoomImageIdx] = useState<number>();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!product) {
    return <Container className="py-12">Product not found</Container>;
  }

  const handleAddToBag = (qty: number) => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: `/products/${slug}` } } });
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      qty,
    });
  };

  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Gallery */}
        <ProductGallery images={product.images} alt={product.name} onImageClick={setZoomImageIdx} />

        {/* Details */}
        <div className="space-y-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="font-heading text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-semibold text-primary">{formatPriceSimple(product.price)}</p>
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? '⭐' : '☆'}>
                  {' '}
                </span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.rating})</span>
          </div>

          {/* Color Selector */}
          <VariantSelector
            label="Color"
            options={product.colors.map((c: { name: string }) => c.name)}
            value={selectedColor}
            onChange={setSelectedColor}
          />

          {/* Size Selector */}
          <VariantSelector
            label="Size"
            options={product.sizes}
            value={selectedSize}
            onChange={setSelectedSize}
          />

          {/* Add to Bag */}
          <AddToBag
            productId={product.id}
            onAddToBag={handleAddToBag}
            disabled={!selectedColor || !selectedSize}
          />

          {/* Accordions */}
          <div className="space-y-4 border-t border-muted pt-8">
            <details className="group">
              <summary className="cursor-pointer font-medium py-4 border-b border-muted">
                Details
              </summary>
              <p className="py-4 text-sm text-muted-foreground">{product.description}</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-medium py-4 border-b border-muted">
                Fit & Sizing
              </summary>
              <p className="py-4 text-sm text-muted-foreground">
                This piece fits true to size. For a relaxed fit, size up.
              </p>
            </details>

            <details className="group">
              <summary className="cursor-pointer font-medium py-4 border-b border-muted">
                Care Instructions
              </summary>
              <p className="py-4 text-sm text-muted-foreground">Dry clean recommended.</p>
            </details>
          </div>
        </div>
      </div>
    </Container>
  );
}

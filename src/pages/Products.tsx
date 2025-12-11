import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { ProductGrid } from '../components/product/ProductGrid';
import { FilterSidebar } from '../components/product/FilterSidebar';
import { useProducts } from '../lib/queries';

interface Filters {
  categories: string[];
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
}

export default function Products() {
  const location = useLocation();
  const { data: products = [] } = useProducts();
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    sizes: [],
    colors: [],
    priceRange: [0, 5000],
  });

  // Determine category from route
  const category = useMemo(() => {
    const path = location.pathname;
    if (path.includes('/women')) return 'women';
    if (path.includes('/men')) return 'men';
    if (path.includes('/new')) return 'new';
    if (path.includes('/collections')) return 'collections';
    if (path.includes('/sale')) return 'sale';
    return null;
  }, [location.pathname]);

  // Page title based on category
  const pageTitle = useMemo(() => {
    if (category === 'women') return 'Women';
    if (category === 'men') return 'Men';
    if (category === 'new') return 'New In';
    if (category === 'collections') return 'Collections';
    if (category === 'sale') return 'Sale';
    return 'All Products';
  }, [category]);

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by route category
    if (category) {
      filtered = filtered.filter((p) => {
        if (category === 'new') return p.tags?.includes('new');
        if (category === 'sale') return p.tags?.includes('sale');
        if (category === 'collections') return p.tags?.includes('collection');
        if (category === 'women' || category === 'men') {
          return p.tags?.includes(category);
        }
        return true;
      });
    }

    // Filter by selected categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.some((cat) => p.tags?.includes(cat.toLowerCase()))
      );
    }

    // Filter by sizes
    if (filters.sizes.length > 0) {
      filtered = filtered.filter((p) =>
        filters.sizes.some((size) => p.sizes?.includes(size))
      );
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      filtered = filtered.filter((p) =>
        filters.colors.some((color) =>
          p.colors?.some((c) => c.name.toLowerCase() === color.toLowerCase())
        )
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    return filtered;
  }, [products, filters, category]);

  return (
    <Container className="py-12">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold">{pageTitle}</h1>
        <p className="text-muted-foreground mt-2">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      <div className="flex gap-8">
        <FilterSidebar onFilterChange={setFilters} />
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </Container>
  );
}

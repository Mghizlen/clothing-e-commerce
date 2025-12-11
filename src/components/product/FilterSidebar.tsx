import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

interface Filters {
  categories: string[];
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
}

interface FilterSidebarProps {
  onFilterChange?: (filters: Filters) => void;
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    sizes: [],
    colors: [],
    priceRange: [0, 5000],
  });

  useEffect(() => {
    onFilterChange?.(filters);
  }, [filters, onFilterChange]);

  const toggleCategory = (cat: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const toggleSize = (size: string) => {
    setFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const toggleColor = (color: string) => {
    setFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handlePriceChange = (value: number) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [0, value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      sizes: [],
      colors: [],
      priceRange: [0, 5000],
    });
  };

  return (
    <aside className="w-64 pr-8">
      <div className="space-y-8">
        {/* Category */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Category</h3>
          <div className="space-y-2">
            {['Outerwear', 'Dresses', 'Basics', 'Knitwear', 'Bottoms'].map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded"
                  checked={filters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Size</h3>
          <div className="grid grid-cols-2 gap-2">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <label key={size} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded"
                  checked={filters.sizes.includes(size)}
                  onChange={() => toggleSize(size)}
                />
                <span className="text-sm">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Color</h3>
          <div className="space-y-2">
            {['Black', 'White', 'Beige', 'Navy', 'Grey'].map((color) => (
              <label key={color} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded"
                  checked={filters.colors.includes(color)}
                  onChange={() => toggleColor(color)}
                />
                <span className="text-sm">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Price Range</h3>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        <Button variant="outline" className="w-full" onClick={clearFilters}>
          Clear All
        </Button>
      </div>
    </aside>
  );
}

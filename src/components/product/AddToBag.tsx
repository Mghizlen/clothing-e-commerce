import React from 'react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface AddToBagProps {
  productId: string;
  onAddToBag: (qty: number) => void;
  disabled?: boolean;
}

export function AddToBag({ productId: _productId, onAddToBag, disabled }: AddToBagProps) {
  const [qty, setQty] = React.useState(1);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 border border-muted">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="p-3 hover:bg-muted transition-colors"
        >
          <Icon name="minus" size="sm" />
        </button>
        <span className="flex-1 text-center font-medium">{qty}</span>
        <button
          onClick={() => setQty(qty + 1)}
          className="p-3 hover:bg-muted transition-colors"
        >
          <Icon name="plus" size="sm" />
        </button>
      </div>
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        disabled={disabled}
        onClick={() => onAddToBag(qty)}
      >
        Add to Bag
      </Button>
      <Button variant="ghost" size="lg" className="w-full">
        <Icon name="heart" size="sm" className="mr-2" />
        Add to Wishlist
      </Button>
    </div>
  );
}

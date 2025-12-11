import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { products } from '../data/products';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return Promise.resolve(products);
    },
  });
};

export const useProductBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      return products.find((p) => p.slug === slug) || null;
    },
    enabled: !!slug,
  });
};

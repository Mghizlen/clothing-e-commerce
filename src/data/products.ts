// Import local images
import cashmereImg from '../assets/Premium Cashmere Sweater.jpeg';
import silkCamisoleImg from '../assets/Pure Silk Camisole.png';
import leatherBeltImg from '../assets/Italian Leather Belt.png';
import leatherLoafersImg from '../assets/Italian Leather Loafers.png';
import woolTrousersWomenImg from '../assets/Tailored Wool Trousers women.jpg';
import woolTrousersMenImg from '../assets/tailored wool trousers men.png';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: Array<{
    name: string;
    hex: string;
    images: string[];
  }>;
  stock: Record<string, number>;
  tags: string[];
  rating: number;
}

export const products: Product[] = [
  {
    id: 'signature-wool-coat',
    slug: 'signature-wool-coat',
    name: 'Signature Wool Coat',
    brand: 'Champagne Noir',
    price: 1200,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    description: 'Our iconic wool coat crafted from the finest Italian suiting. Features elegant tailoring and timeless design.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Charcoal',
        hex: '#36454F',
        images: [
          'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
          'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
        ],
      },
      {
        name: 'Camel',
        hex: '#C19A6B',
        images: [
          'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=800&q=80',
        ],
      },
    ],
    stock: { XS: 5, S: 8, M: 10, L: 7, XL: 3 },
    tags: ['outerwear', 'women', 'bestseller', 'new'],
    rating: 4.8,
  },
  {
    id: 'silk-camisole',
    slug: 'silk-camisole',
    name: 'Pure Silk Camisole',
    brand: 'Champagne Noir',
    price: 280,
    currency: 'USD',
    images: [
      silkCamisoleImg,
      silkCamisoleImg,
    ],
    description: 'Delicate silk camisole with adjustable straps. Perfect for layering or wearing alone.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Champagne',
        hex: '#F7E7CE',
        images: [silkCamisoleImg],
      },
      {
        name: 'Black',
        hex: '#000000',
        images: [silkCamisoleImg],
      },
    ],
    stock: { XS: 12, S: 15, M: 18, L: 10 },
    tags: ['basics', 'women', 'silk', 'new'],
    rating: 4.9,
  },
  {
    id: 'cashmere-sweater',
    slug: 'cashmere-sweater',
    name: 'Premium Cashmere Sweater',
    brand: 'Champagne Noir',
    price: 450,
    currency: 'USD',
    images: [
      cashmereImg,
      cashmereImg,
    ],
    description: '100% pure cashmere crewneck sweater. Soft, lightweight, and luxuriously warm.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Oatmeal',
        hex: '#E8DCC4',
        images: [cashmereImg],
      },
      {
        name: 'Navy',
        hex: '#000080',
        images: [cashmereImg],
      },
    ],
    stock: { XS: 6, S: 9, M: 11, L: 8, XL: 4 },
    tags: ['knitwear', 'women', 'cashmere', 'bestseller'],
    rating: 4.9,
  },
  {
    id: 'wool-trousers',
    slug: 'wool-trousers',
    name: 'Tailored Wool Trousers',
    brand: 'Champagne Noir',
    price: 380,
    currency: 'USD',
    images: [
      woolTrousersWomenImg,
      woolTrousersMenImg,
    ],
    description: 'Impeccably tailored wool trousers with a high waist and wide leg.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Black',
        hex: '#000000',
        images: [woolTrousersWomenImg],
      },
      {
        name: 'Grey',
        hex: '#808080',
        images: [woolTrousersMenImg],
      },
    ],
    stock: { XS: 7, S: 10, M: 12, L: 9, XL: 5 },
    tags: ['bottoms', 'women', 'men', 'tailored'],
    rating: 4.7,
  },
  {
    id: 'leather-loafers',
    slug: 'leather-loafers',
    name: 'Italian Leather Loafers',
    brand: 'Champagne Noir',
    price: 520,
    currency: 'USD',
    images: [
      leatherLoafersImg,
      leatherLoafersImg,
    ],
    description: 'Handcrafted Italian leather loafers. Classic style meets modern comfort.',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: [
      {
        name: 'Black',
        hex: '#000000',
        images: [leatherLoafersImg],
      },
      {
        name: 'Tan',
        hex: '#D2B48C',
        images: [leatherLoafersImg],
      },
    ],
    stock: { '36': 4, '37': 6, '38': 8, '39': 7, '40': 5, '41': 3 },
    tags: ['shoes', 'women', 'leather'],
    rating: 4.8,
  },
  {
    id: 'linen-shirt',
    slug: 'linen-shirt',
    name: 'Pure Linen Shirt',
    brand: 'Champagne Noir',
    price: 195,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1598032895397-b9c37c924971?w=800&q=80',
    ],
    description: 'Breathable linen shirt with a relaxed fit. Perfect for warm weather.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'White',
        hex: '#FFFFFF',
        images: [
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
        ],
      },
      {
        name: 'Beige',
        hex: '#F5F5DC',
        images: [
          'https://images.unsplash.com/photo-1598032895397-b9c37c924971?w=800&q=80',
        ],
      },
    ],
    stock: { XS: 10, S: 14, M: 16, L: 12, XL: 8 },
    tags: ['basics', 'women', 'men', 'linen', 'sale'],
    rating: 4.6,
  },
  {
    id: 'wool-blazer',
    slug: 'wool-blazer',
    name: 'Structured Wool Blazer',
    brand: 'Champagne Noir',
    price: 680,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80',
      'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&q=80',
    ],
    description: 'Sharp, structured blazer in premium wool. Essential for any wardrobe.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Black',
        hex: '#000000',
        images: [
          'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80',
        ],
      },
      {
        name: 'Charcoal',
        hex: '#36454F',
        images: [
          'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&q=80',
        ],
      },
    ],
    stock: { XS: 5, S: 8, M: 10, L: 7, XL: 4 },
    tags: ['outerwear', 'women', 'men', 'tailored', 'bestseller'],
    rating: 4.9,
  },
  {
    id: 'silk-dress',
    slug: 'silk-dress',
    name: 'Silk Midi Dress',
    brand: 'Champagne Noir',
    price: 540,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
    ],
    description: 'Flowing silk midi dress with subtle draping. Effortlessly elegant.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Champagne',
        hex: '#F7E7CE',
        images: [
          'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
        ],
      },
      {
        name: 'Black',
        hex: '#000000',
        images: [
          'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
        ],
      },
    ],
    stock: { XS: 6, S: 9, M: 10, L: 7 },
    tags: ['dresses', 'women', 'silk', 'collection'],
    rating: 4.8,
  },
  {
    id: 'leather-belt',
    slug: 'leather-belt',
    name: 'Italian Leather Belt',
    brand: 'Champagne Noir',
    price: 165,
    currency: 'USD',
    images: [
      leatherBeltImg,
      leatherBeltImg,
    ],
    description: 'Classic leather belt with polished brass buckle. Timeless accessory.',
    sizes: ['S', 'M', 'L'],
    colors: [
      {
        name: 'Black',
        hex: '#000000',
        images: [leatherBeltImg],
      },
      {
        name: 'Brown',
        hex: '#8B4513',
        images: [leatherBeltImg],
      },
    ],
    stock: { S: 15, M: 20, L: 12 },
    tags: ['accessories', 'women', 'men', 'leather'],
    rating: 4.7,
  },
  {
    id: 'wool-scarf',
    slug: 'wool-scarf',
    name: 'Fine Wool Scarf',
    brand: 'Champagne Noir',
    price: 125,
    currency: 'USD',
    images: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
      'https://images.unsplash.com/photo-1601924270582-e898a9a28e0d?w=800&q=80',
    ],
    description: 'Soft wool scarf in classic pattern. Perfect finishing touch.',
    sizes: ['One Size'],
    colors: [
      {
        name: 'Camel',
        hex: '#C19A6B',
        images: [
          'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
        ],
      },
      {
        name: 'Grey',
        hex: '#808080',
        images: [
          'https://images.unsplash.com/photo-1601924270582-e898a9a28e0d?w=800&q=80',
        ],
      },
    ],
    stock: { 'One Size': 25 },
    tags: ['accessories', 'women', 'men', 'wool', 'sale'],
    rating: 4.6,
  },
];

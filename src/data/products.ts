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

const baseImg = 'https://images.unsplash.com/photo-';

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'signature-wool-coat-charcoal',
    name: 'Signature Wool Coat',
    brand: 'Champagne Noir',
    price: 1200,
    currency: 'USD',
    images: [
      `${baseImg}1539533018447-63fcce2678e3?w=800&h=1000&fit=crop`,
      `${baseImg}1591047139829-d91aecb6caea?w=800&h=1000&fit=crop`
    ],
    description: 'Our iconic wool coat crafted from the finest Italian suiting. Features elegant tailoring and timeless design.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Charcoal', hex: '#333333', images: [`${baseImg}1539533018447-63fcce2678e3?w=800&h=1000&fit=crop`] },
      { name: 'Camel', hex: '#c19a6b', images: [`${baseImg}1591047139829-d91aecb6caea?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'XS': 5, 'S': 8, 'M': 12, 'L': 10, 'XL': 6 },
    tags: ['women', 'Outerwear', 'new', 'collection'],
    rating: 4.8
  },
  {
    id: 'p2',
    slug: 'silk-camisole-ivory',
    name: 'Pure Silk Camisole',
    brand: 'Champagne Noir',
    price: 280,
    currency: 'USD',
    images: [
      `${baseImg}1515886657613-9d3515518553?w=800&h=1000&fit=crop`,
      `${baseImg}1617137968427-85924c800a22?w=800&h=1000&fit=crop`
    ],
    description: 'Luxurious 100% silk camisole with delicate adjustable straps. Perfect layering piece.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Ivory', hex: '#fffff0', images: [`${baseImg}1515886657613-9d3515518553?w=800&h=1000&fit=crop`] },
      { name: 'Champagne', hex: '#f0e6d2', images: [`${baseImg}1617137968427-85924c800a22?w=800&h=1000&fit=crop`] },
      { name: 'Charcoal', hex: '#2a2a2a', images: [`${baseImg}1583743814966-18f8bd1ec10f?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'XS': 15, 'S': 20, 'M': 18, 'L': 12 },
    tags: ['women', 'Basics', 'new'],
    rating: 4.9
  },
  {
    id: 'p3',
    slug: 'cashmere-sweater-cream',
    name: 'Premium Cashmere Sweater',
    brand: 'Champagne Noir',
    price: 650,
    currency: 'USD',
    images: [
      `${baseImg}1618932260643-ee00dbbc36b9?w=800&h=1000&fit=crop`,
      `${baseImg}1620799140188-3bb328b23f48?w=800&h=1000&fit=crop`
    ],
    description: 'Exquisitely soft pure cashmere sweater. Hand-finished details and impeccable craftsmanship.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cream', hex: '#fffdd0', images: [`${baseImg}1618932260643-ee00dbbc36b9?w=800&h=1000&fit=crop`] },
      { name: 'Taupe', hex: '#b38b8b', images: [`${baseImg}1620799140188-3bb328b23f48?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'XS': 4, 'S': 6, 'M': 8, 'L': 7, 'XL': 3 },
    tags: ['women', 'Knitwear', 'collection'],
    rating: 4.9
  },
  {
    id: 'p4',
    slug: 'tailored-trousers-black',
    name: 'Tailored Wool Trousers',
    brand: 'Champagne Noir',
    price: 420,
    currency: 'USD',
    images: [
      `${baseImg}1594633312681-457a4282c4f7?w=800&h=1000&fit=crop`,
      `${baseImg}1624378439575-52b3f14d6527?w=800&h=1000&fit=crop`
    ],
    description: 'Impeccably tailored wool trousers with a perfect fit. Essential luxury wardrobe piece.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000', images: [`${baseImg}1594633312681-457a4282c4f7?w=800&h=1000&fit=crop`] },
      { name: 'Navy', hex: '#000080', images: [`${baseImg}1624378439575-52b3f14d6527?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'XS': 10, 'S': 12, 'M': 15, 'L': 14, 'XL': 8 },
    tags: ['women', 'men', 'Bottoms'],
    rating: 4.7
  },
  {
    id: 'p5',
    slug: 'leather-loafers-burgundy',
    name: 'Italian Leather Loafers',
    brand: 'Champagne Noir',
    price: 580,
    currency: 'USD',
    images: [
      `${baseImg}1533867774919-d8c5cd217e38?w=800&h=1000&fit=crop`,
      `${baseImg}1560343090-f0409e92791a?w=800&h=1000&fit=crop`
    ],
    description: 'Handcrafted leather loafers from Italy. Comfort meets timeless elegance.',
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    colors: [
      { name: 'Burgundy', hex: '#800020', images: [`${baseImg}1533867774919-d8c5cd217e38?w=800&h=1000&fit=crop`] },
      { name: 'Black', hex: '#000000', images: [`${baseImg}1560343090-f0409e92791a?w=800&h=1000&fit=crop`] }
    ],
    stock: { '5': 3, '6': 4, '7': 6, '8': 8, '9': 7, '10': 5, '11': 2 },
    tags: ['men', 'women'],
    rating: 4.8
  },
  {
    id: 'p6',
    slug: 'linen-shirt-white',
    name: 'Pure Linen Shirt',
    brand: 'Champagne Noir',
    price: 320,
    currency: 'USD',
    images: [
      `${baseImg}1598032897177-61d9d34629d7?w=800&h=1000&fit=crop`,
      `${baseImg}1603252109360-909baaf261c7?w=800&h=1000&fit=crop`
    ],
    description: 'Breathable Belgian linen shirt with classic tailoring. Perfect for any season.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'White', hex: '#ffffff', images: [`${baseImg}1598032897177-61d9d34629d7?w=800&h=1000&fit=crop`] },
      { name: 'Sage', hex: '#9dc183', images: [`${baseImg}1603252109360-909baaf261c7?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'XS': 12, 'S': 16, 'M': 20, 'L': 18, 'XL': 10 },
    tags: ['men', 'women', 'new'],
    rating: 4.6
  },
  {
    id: 'p7',
    slug: 'wool-blazer-navy',
    name: 'Structured Wool Blazer',
    brand: 'Champagne Noir',
    price: 780,
    currency: 'USD',
    images: [
      `${baseImg}1507680434567-5739c80be1ac?w=800&h=1000&fit=crop`,
      `${baseImg}1617127365376-ec9409ba85aa?w=800&h=1000&fit=crop`
    ],
    description: 'Architectural wool blazer with impeccable seaming. An investment piece for the discerning wardrobe.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Navy', hex: '#001f3f', images: [`${baseImg}1507680434567-5739c80be1ac?w=800&h=1000&fit=crop`] },
      { name: 'Charcoal', hex: '#36454f', images: [`${baseImg}1617127365376-ec9409ba85aa?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'XS': 4, 'S': 6, 'M': 8, 'L': 7, 'XL': 5 },
    tags: ['women', 'men', 'Outerwear', 'collection'],
    rating: 4.9
  },
  {
    id: 'p8',
    slug: 'midi-dress-black',
    name: 'Silk Midi Dress',
    brand: 'Champagne Noir',
    price: 890,
    currency: 'USD',
    images: [
      `${baseImg}1595777457583-95e059d581b8?w=800&h=1000&fit=crop`,
      `${baseImg}1612423284934-2850a4ea6c20?w=800&h=1000&fit=crop`
    ],
    description: 'Elegant silk midi dress with subtle draping. Timeless sophistication for any occasion.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#000000', images: [`${baseImg}1595777457583-95e059d581b8?w=800&h=1000&fit=crop`] },
      { name: 'Champagne', hex: '#f3e5ab', images: [`${baseImg}1612423284934-2850a4ea6c20?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'XS': 3, 'S': 5, 'M': 7, 'L': 6 },
    tags: ['women', 'Dresses', 'new', 'sale'],
    rating: 4.8
  },
  {
    id: 'p9',
    slug: 'leather-belt-tan',
    name: 'Italian Leather Belt',
    brand: 'Champagne Noir',
    price: 220,
    currency: 'USD',
    images: [
      `${baseImg}1555507171-8b286c77ecb6?w=800&h=1000&fit=crop`,
      `${baseImg}1618886492726-f2f90df4fc07?w=800&h=1000&fit=crop`
    ],
    description: 'Supple Italian leather belt with gold buckle. Essential accessory for elevated style.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Tan', hex: '#d4a574', images: [`${baseImg}1555507171-8b286c77ecb6?w=800&h=1000&fit=crop`] },
      { name: 'Black', hex: '#1a1a1a', images: [`${baseImg}1618886492726-f2f90df4fc07?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'S': 10, 'M': 14, 'L': 12, 'XL': 8 },
    tags: ['men', 'women', 'sale'],
    rating: 4.7
  },
  {
    id: 'p10',
    slug: 'wool-scarf-burgundy',
    name: 'Fine Wool Scarf',
    brand: 'Champagne Noir',
    price: 185,
    currency: 'USD',
    images: [
      `${baseImg}1609691535111-54f5d5e2d05f?w=800&h=1000&fit=crop`,
      `${baseImg}1606903688521-c25b9e8f1e51?w=800&h=1000&fit=crop`
    ],
    description: 'Luxuriously soft wool scarf. Perfect to elevate any outfit with understated elegance.',
    sizes: ['One Size'],
    colors: [
      { name: 'Burgundy', hex: '#7a1f1f', images: [`${baseImg}1609691535111-54f5d5e2d05f?w=800&h=1000&fit=crop`] },
      { name: 'Camel', hex: '#c8a882', images: [`${baseImg}1606903688521-c25b9e8f1e51?w=800&h=1000&fit=crop`] }
    ],
    stock: { 'One Size': 25 },
    tags: ['women', 'men', 'sale'],
    rating: 4.8
  },
];

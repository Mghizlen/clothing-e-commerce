# Champagne Noir — Luxury Clothing E-commerce

A premium, full-bleed luxury clothing storefront built with React, Vite, TypeScript, TailwindCSS, and Framer Motion.

## Features

✨ **Cinematic Hero Section** - Full-bleed hero with animated CTA buttons  
✨ **Editorial Collections** - Three featured collection tiles with hover animations  
✨ **Featured Products** - Horizontal product showcase with quick-add overlays  
✨ **Brand Story** - Two-column narrative section with imagery  
✨ **Animated Stats Counter** - Auto-counting statistics that reset on scroll  
✨ **Premium Product Pages** - Full product gallery, variant selection, ratings  
✨ **Shopping Cart** - Add to cart, quantity controls, persistent storage  
✨ **Wishlist** - Save favorite items with persistent localStorage  
✨ **Responsive Layout** - Desktop-first, mobile-optimized  
✨ **Accessibility** - ARIA labels, keyboard navigation, focus management  
✨ **Auto-Contrast Text** - Intelligent text color selection based on background  
✨ **Framer Motion Animations** - Smooth scroll animations with replay on exit  
✨ **React Query** - Efficient data fetching and caching  
✨ **Zustand State Management** - Lightweight cart and wishlist stores  

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **React Router** - Page routing
- **React Query** - Server state management
- **Zustand** - Client state management
- **clsx** - Conditional className utility
- **Playfair Display & Inter** - Premium typography

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Minicart, Container
│   ├── home/            # Hero, Collections, FeaturedRow, BrandStory, Stats
│   ├── product/         # ProductCard, ProductGrid, Gallery, Variants
│   ├── ui/              # Button, Icon, Input, Modal, Toast, Badge
│   └── misc/            # SearchOverlay, ImageWithPlaceholder, ZoomModal
├── pages/               # Home, Products, Product, Cart, Checkout, Wishlist, Account
├── hooks/               # useInViewAnimate, useCounterOnView, useAutoContrast
├── store/               # useCartStore, useWishlistStore, useAuthStore
├── lib/                 # Query hooks, price utilities, contrast helpers
├── data/                # Sample products, collections
├── styles/              # Global CSS, Tailwind imports
└── main.tsx / App.tsx
```

## Key Components

### Hero Section
- Full-bleed background with dark overlay
- Centered content box with serif headline
- Animated CTA buttons with accent border
- Uses `useInViewAnimate` for replay animations

### Collections Tiles
- 3-column responsive grid
- Image hover scale (1.05)
- Bottom overlay with title and Explore CTA
- Staggered fade-in animation

### Featured Row
- Horizontal product grid (4 items on desktop)
- Product cards with:
  - Image with alt-image hover swap
  - Quick Add button overlay
  - Wishlist toggle
  - Price and brand info

### Stats Strip
- 4 animated counters (collections, clients, years, stores)
- Uses `useCounterOnView` to animate 0→value
- Resets to 0 when section leaves viewport

### Product Page
- Two-column layout: Gallery + Details
- Image gallery with thumbnails
- Color and size selectors
- Quantity picker
- Add to Bag button
- Expandable sections (Details, Fit, Care)

### Cart & Checkout
- Cart management with qty adjustments
- Order summary with totals
- Checkout form with address input
- Persistent cart via localStorage

## Color Palette

- **Primary**: `#0a0a0a` (Black)
- **Accent**: `#cdb892` (Champagne)
- **Background**: `#fbfaf8` (Off-white)
- **Secondary**: `#f5f0ea` (Beige)
- **Muted**: `#f0edeb` (Light gray)
- **Text**: `#111111` (Charcoal)

## Animations

- **Hero elements**: Fade + slide up on view
- **Collection tiles**: Staggered fade + scale on hover
- **Product cards**: Scale and overlay on hover
- **Counters**: Animate 0→value with requestAnimationFrame
- **Cart slide**: Spring physics (stiffness: 300, damping: 30)
- **Page transitions**: Fade animations with Framer Motion

## State Management

### Zustand Stores

**useCartStore**
- `items[]` - Cart items with product, qty, variants
- `addItem()`, `updateQty()`, `removeItem()`, `clearCart()`
- `subtotal()`, `itemCount()` - Computed selectors
- Persists to localStorage

**useWishlistStore**
- `items: Set<string>` - Product IDs
- `toggle()`, `has()`, `clear()`
- Persists to localStorage

**useAuthStore**
- `user` - Current user object
- `login()`, `signup()`, `logout()`
- Mock authentication

## Hooks

### useInViewAnimate
```ts
const { inView } = useInViewAnimate(ref, { threshold: 0.2 });
```
Detects when element enters viewport; resets when leaving for animation replay.

### useCounterOnView
```ts
const value = useCounterOnView(1000, inView, 1100);
```
Animates number from 0→target with requestAnimationFrame. Resets to 0 when not in view.

### useAutoContrast
```ts
const textColor = readableTextColor('#cdb892');
```
Returns readable text color (#fff or #111) based on background luminance.

## Responsive Breakpoints

- Mobile: 1 column
- Tablet (md): 2 columns
- Desktop (lg): 3-4 columns
- Extra Large (xl): 4 columns

## Accessibility Features

✅ Semantic HTML (`<header>`, `<nav>`, `<footer>`, `<section>`)  
✅ ARIA labels on icon-only buttons  
✅ Focus trap in modals and minicart  
✅ Keyboard navigation (Escape to close)  
✅ Alt text on all images  
✅ Color contrast >= 4.5:1 for body text  
✅ Landmark regions  

## Development

### Available Scripts

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Adding New Products

Edit `src/data/products.ts`:

```ts
{
  id: 'p11',
  slug: 'product-slug',
  name: 'Product Name',
  brand: 'Champagne Noir',
  price: 500,
  currency: 'USD',
  images: ['/images/products/img1.jpg', '/images/products/img2.jpg'],
  description: 'Product description...',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Black', hex: '#000000', images: [...] },
  ],
  stock: { 'XS': 5, 'S': 10, ... },
  tags: ['Category', 'Tag'],
  rating: 4.8
}
```

### Customizing Colors

Edit `tailwind.config.cjs` color theme object:

```js
colors: {
  bg: '#fbfaf8',
  fg: '#111111',
  accent: '#cdb892',
  // ...
}
```

## Performance Optimizations

- Image lazy loading with blur-up placeholders
- Code splitting via React Router
- Tailwind CSS purging of unused styles
- RequestAnimationFrame for smooth animations
- React Query caching and deduplication
- Zustand for lightweight state (no Redux overhead)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 Champagne Noir. All rights reserved.

## Support

For issues or questions, please refer to the specification in `COPILOT_BUILD_INSTRUCTIONS.md`.

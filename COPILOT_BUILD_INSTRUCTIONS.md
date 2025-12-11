
---

# COPILOT_BUILD_INSTRUCTIONS.md

**Project:** Champagne Noir — Luxury Clothing E-commerce (Frontend only)
**Stack:** React + Vite + TypeScript + TailwindCSS + shadcn/ui + Framer Motion + React Query + Zustand


---

## 0 — High level goal

Rebuild the storefront to match the uploaded luxury reference: full-bleed cinematic hero, centered large serif headline + CTAs, three editorial collection tiles, a tight featured product row, spacious editorial sections, premium typography, Champagne Noir color palette, replayable scroll animations, reversible counters, auto-contrast text helper, accessible mini-cart & wishlist, responsive desktop-first layout.

---

## 1 — Project scaffold & install

Scaffold with Vite + React + TypeScript.

Commands:

```
npm create vite@latest champagne-noir -- --template react-ts
cd champagne-noir
npm install
npm i react-router-dom @tanstack/react-query framer-motion zustand clsx tailwindcss postcss autoprefixer @headlessui/react @radix-ui/react-portal
# shadcn/ui assumed; include later if desired
npx tailwindcss init -p
```

Add scripts in `package.json`:

```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
```

---

## 2 — Folder structure (generate exactly)

```
src/
  main.tsx
  App.tsx
  index.css
  data/
    products.ts
    collections.ts
  pages/
    Home.tsx
    Products.tsx
    Product.tsx
    Cart.tsx
    Checkout.tsx
    OrderSummary.tsx
    Wishlist.tsx
    Account.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      Container.tsx
      Minicart.tsx
    home/
      Hero.tsx
      CollectionsTiles.tsx
      FeaturedRow.tsx
      BrandStory.tsx
      StatsStrip.tsx
    product/
      ProductCard.tsx
      ProductGrid.tsx
      FilterSidebar.tsx
      ProductGallery.tsx
      VariantSelector.tsx
      AddToBag.tsx
    ui/
      Button.tsx
      Icon.tsx
      Badge.tsx
      Input.tsx
      Modal.tsx
      Toast.tsx
    misc/
      SearchOverlay.tsx
      ImageWithPlaceholder.tsx
      ImageZoomModal.tsx
  hooks/
    useInViewAnimate.ts
    useCounterOnView.ts
    useAutoContrast.ts
  store/
    useCartStore.ts
    useWishlistStore.ts
    useAuthStore.ts
  lib/
    queryClient.ts
    priceUtil.ts
  styles/
    tailwind.css
    theme.css
```

---

## 3 — Tailwind + Theme tokens (exact colors)

Replace `tailwind.config.cjs` content to include tokens and fonts:

```js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html','./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fbfaf8',
        fg: '#111111',
        primary: '#0a0a0a',
        'primary-foreground': '#ffffff',
        secondary: '#f5f0ea',
        'secondary-foreground': '#2e2a27',
        muted: '#f0edeb',
        'muted-foreground': '#8a857f',
        accent: '#cdb892',
        'accent-foreground': '#111111',
        destructive: '#e85a4f',
        'destructive-foreground': '#ffffff',
        success: '#dff3e4',
        warning: '#ffe8b2',
        card: '#ffffff',
        'card-foreground': '#111111',
        sidebar: '#ffffff',
      },
      fontFamily: {
        heading: ['Playfair Display','serif'],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        site: '1200px',
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem'
      }
    }
  },
  plugins: [],
};
```

Add in `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* global css */
:root {
  --bg: #fbfaf8;
  --fg: #111111;
  --accent: #cdb892;
  --primary: #0a0a0a;
}
body { background: var(--bg); color: var(--fg); font-family: Inter, system-ui, sans-serif; }
```

---

## 4 — Global utilities & hooks (must implement)

### 4.1 `useInViewAnimate.ts`

Behavior: IntersectionObserver that returns `inView` boolean and increments `entryCount` if desired. Should allow reset when leaving viewport (so animations replay).

```ts
import { useEffect, useState, RefObject } from 'react';

export function useInViewAnimate<T extends Element>(ref: RefObject<T>, options = { threshold: 0.2 }) {
  const [inView, setInView] = useState(false);
  useEffect(()=> {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries)=> {
      entries.forEach(e => {
        setInView(e.isIntersecting);
      });
    }, options);
    io.observe(el);
    return ()=> io.disconnect();
  }, [ref, options.threshold]);
  return { inView };
}
```

### 4.2 `useCounterOnView.ts`

Animate numeric counters when `inView` true; reset to 0 when not.

```ts
import { useEffect, useState } from 'react';

export function useCounterOnView(target: number, inView: boolean, duration = 1100) {
  const [value, setValue] = useState(0);
  useEffect(()=> {
    let raf = 0;
    let start: number | null = null;
    if (!inView) { setValue(0); return; }
    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const cur = Math.floor(progress * target);
      setValue(cur);
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return ()=> cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}
```

### 4.3 `useAutoContrast.ts`

Takes background color (hex) OR accepts a DOM element for computed style; returns readable text color `#fff` or `#111`.

```ts
export function readableTextColor(hex?: string) {
  if (!hex) return '#111111';
  const c = hex.replace('#','');
  const r = parseInt(c.substr(0,2),16);
  const g = parseInt(c.substr(2,2),16);
  const b = parseInt(c.substr(4,2),16);
  const lum = 0.2126*(r/255) + 0.7152*(g/255) + 0.0722*(b/255);
  return lum < 0.55 ? '#ffffff' : '#111111';
}
```

---

## 5 — Core components & behavior (detailed)

### 5.1 Header.tsx (Fixed top)

* Left: small logo (serif)
* Middle (desktop): nav links (Women, Men, New In, Collections, Sale)
* Right: search icon (opens overlay), account, wishlist, cart (with badge)
* Cart opens `Minicart` (slide/dropdown) on click; keyboard accessible.

Key interactions:

* On scroll, header gains subtle backdrop blur and 1px border at bottom.
* Cart shows item count badge.
* MiniCart must trap focus while open.

### 5.2 Hero.tsx (full-bleed cinematic)

* Full bleed background image/video (autoplay muted loop optional).
* Dark translucent overlay (`bg-black/40`) to ensure contrast.
* Center-left aligned content box (max width ~700px), serif H1 with large leading, small subtitle, two CTAs:

  * Primary: `Shop Women` (solid dark `--primary` with champagne accent border hover)
  * Secondary: `Shop Men` (ghost/outline)
* Use `readableTextColor` to set text color dynamically if overlay image changes.
* Framer Motion: animate headline & buttons on enter (fade+up). `viewport: { once: false }` so it replays.

### 5.3 CollectionsTiles.tsx

* 3 editorial tiles in a grid (equal heights).
* Each tile: image cover, bottom-left overlay with collection title + Explore CTA (small pill).
* On hover: image scale (1.05), overlay slightly darkens.
* Motion: fade+up with stagger using `whileInView` hooks but also support `useInViewAnimate` to reset when leaving viewport.

### 5.4 FeaturedRow.tsx

* Horizontal scroll with 4–5 visible items on desktop.
* Product card: image, brand (muted), product name (serif), price.
* Hover: alt image swap (on hover show second image), slight elevation, show quick add button overlay.
* Cards animate on enter; reset on leave.

### 5.5 BrandStory.tsx

* Two-column: left text (serif heading + paragraph), right tall image (rounded).
* Beige background `secondary` for this strip.

### 5.6 StatsStrip.tsx

* 3–4 stat counters (collections, clients, years, stores).
* Use `useInViewAnimate` + `useCounterOnView` to animate 0→value and reset when out.

### 5.7 Footer.tsx

* Use `secondary` background with subtle top border.
* Left: logo + short description.
* Middle: links grouped (Customer Service, Company).
* Right: Newsletter input + subscribe button.
* Small copyright.

---

## 6 — Product / PLP / PDP behaviors

### PLP (Products.tsx)

* Left filter sidebar: category, size, color swatches, price slider (range), material checkboxes.
* Top bar: breadcrumbs, sort select, item count.
* Grid: 3 columns desktop, 2 tablet, 1 mobile. Use `max-w-site` centered.
* Each `ProductCard`:

  * Large image area with `aspect-[4/5]` and `object-cover`.
  * Hover alt image swap, show `Add to Bag` quick overlay and wishlist heart.
  * Price + name below.
  * Framer Motion animate per card (staggered), reset on exit.

### PDP (Product.tsx)

* Two-column layout:

  * Left: gallery carousel (thumbnails vertical on left), large main image. Click to open `ImageZoomModal`.
  * Right: product title (serif), price, short description, rating, color swatches, size selector (disable OOS sizes), quantity selector, Add to Bag (primary).
  * Accordions: Details, Fit & sizing, Care instructions, Shipping & returns.
* Selecting a color swaps images.
* Add to Bag triggers `useCartStore.add(item)` and shows toast or opens mini-cart.

---

## 7 — Stores & data flow

### Zustand stores

`useCartStore.ts`:

* items: { productId, name, price, qty, variants }
* actions: addItem, updateQty, removeItem, clearCart
* selectors: subtotal, itemCount
* Persist to `localStorage`.

`useWishlistStore.ts`:

* toggles product ids in wishlist, persist to `localStorage`.

`useAuthStore.ts`:

* mock login/signup, persist basic user object.

### React Query

* `lib/queryClient.ts` create client and wrap App with `QueryClientProvider`.
* Fetch mock data from `src/data/products.ts` via `useQuery('products', ...)` returning Promise.resolve(products).

---

## 8 — Accessibility & contrast enforcement

* Implement `useAutoContrast` for hero & CTA backgrounds: compute color and set text color accordingly.
* All images must include alt.
* Buttons & links must have `aria-label` when icon only.
* Modal & mini-cart must trap focus while open.
* Ensure color contrast ratio >= 4.5:1 for body text and >= 3:1 for larger text. Use `accent` only for decorative accents unless contrast passes.

---

## 9 — Animations rules (FRAMER MOTION + IO)

* Use `motion` components and `useInViewAnimate` hook.
* All section-level animations use `whileInView` with `viewport={{ once:false, amount:0.15 }}` or controlled by `inView` from hook to allow replay.
* Counters must reset to 0 when section out of view (use `useCounterOnView`).
* Hover interactions are micro (scale 1.03, shadow increase).
* Carousel transitions use spring: `{ type:'spring', stiffness: 120, damping: 18 }`.

---

## 10 — Sample data (generate files)

`src/data/collections.ts` (3 items):

```ts
export const collections = [
  { id: 'c1', name: 'The City Coat Collection', label: 'Outerwear', image: '/images/collections/city-coat.jpg', href:'/products?collection=city-coat' },
  { id: 'c2', name: 'Silk Essentials', label: 'New In', image:'/images/collections/silk-essentials.jpg', href:'/products?collection=silk' },
  { id: 'c3', name: 'Knit Atelier', label: 'Knitwear', image:'/images/collections/knit-atelier.jpg', href:'/products?collection=knit' },
];
```

`src/data/products.ts` create 8–12 luxury items with fields: id, slug, name, brand, price, currency, images[], description, sizes[], colors[{name,hex,images}], stock map, tags, rating.

---

## 11 — Key pages to generate first (in this order)

1. `App.tsx` — router, QueryClientProvider, global layout
2. `Header.tsx` + `Minicart.tsx`
3. `Home.tsx` — Hero, CollectionsTiles, FeaturedRow, BrandStory, StatsStrip, Footer
4. `Products.tsx` — FilterSidebar + ProductGrid
5. `Product.tsx` — PDP with gallery and AddToBag
6. `Cart.tsx` / `Checkout.tsx` / `OrderSummary.tsx`

Copilot should scaffold all pages and the components above and wire internal navigation.

---

## 12 — Dev ergonomics & extras

* Create `Container.tsx` to center content using `max-w-site`.
* Create `ImageWithPlaceholder.tsx` to lazy load with blurred placeholder.
* Add `Toast` system for success messages (Add to cart).
* Add ESLint and Prettier configs.
* Add `README.md` with run instructions and list of implemented features.

---

## 13 — Tests (minimal)

Add Vitest + React Testing Library config and one test:

* `ProductCard.test.tsx` ensure `AddToBag` triggers store change.

---

## 14 — Final Copilot instruction (paste this to finish)

At the end of the file, append the explicit instruction for Copilot:

> **Generate the entire project now.**
>
> 1. Create the full folder structure exactly as specified.
> 2. Add Tailwind config and global CSS tokens.
> 3. Implement all hooks in `/hooks`.
> 4. Implement all stores in `/store`.
> 5. Create sample product and collection data.
> 6. Build pages in the order listed.
> 7. Use Framer Motion for animations; IntersectionObserver hooks must allow replay (reset on leave).
> 8. Implement auto-contrast helper and use it for hero and CTA sections.
> 9. Wire up React Query to fetch local mock data files.
> 10. Ensure mini-cart and wishlist persist to `localStorage`.
> 11. Add accessible behaviors: focus trap for modals, ARIA labels, keyboard navigation.
> 12. Add README.md with run instructions (`npm install`, `npm run dev`).
>
> **When complete, run the app and ensure the Home page visually matches the provided luxury screenshot: cinematic hero, three collection tiles, featured row, rich spacing, serif headings, champagne-accent.**

---


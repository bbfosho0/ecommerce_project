# Audiophile Haven

A premium consumer-tech ecommerce storefront built with Next.js, Sanity, React Context, and Stripe Checkout.

Audiophile Haven is a portfolio-focused ecommerce application for audio products. The frontend has been redesigned around a polished Figma-driven visual system while preserving the original working product data, cart state, dynamic routing, and Stripe checkout flow.

Live site: https://ecommerce-project-delta.vercel.app/

## Highlights

- Premium storefront UI with responsive homepage, product cards, product detail pages, cart drawer, and checkout success experience.
- Live Sanity CMS product and banner content instead of hardcoded mock data.
- Dynamic product pages generated from Sanity slugs with fallback support.
- Cart drawer powered by React Context with add, remove, increment, decrement, subtotal, empty state, and checkout loading states.
- Stripe Checkout integration through a Next.js API route.
- Accessible UI improvements including semantic regions, descriptive image alt text, keyboard-friendly product thumbnails, dialog semantics, and visible focus styling.
- Figma-informed design system using global CSS tokens for color, typography, spacing, radii, shadows, containers, and responsive behavior.

## Tech Stack

- Next.js 12 Pages Router
- React 17
- Sanity CMS
- Stripe Checkout
- React Context API
- React Hot Toast
- React Icons
- Global CSS with design tokens

## Core User Flow

1. The homepage fetches live product and banner data from Sanity.
2. Users browse responsive product cards and navigate to dynamic product detail routes.
3. Product pages support image selection, quantity changes, Add to Cart, and Buy Now.
4. The cart drawer shows real cart contents, quantity controls, subtotal, empty state, and Stripe checkout.
5. Successful checkout redirects to `/success`, resets cart state, and displays a polished confirmation page.

## Project Structure

```text
components/
  Cart.jsx
  Footer.jsx
  FooterBanner.jsx
  HeroBanner.jsx
  Layout.jsx
  Navbar.jsx
  Product.jsx

context/
  StateContext.js

lib/
  client.js
  getStripe.js
  utils.js

pages/
  index.js
  success.js
  api/stripe.js
  product/[slug].js

sanity_ecommerce/
  schemas/

styles/
  globals.css
```

## What I Focused On

This project emphasizes the kind of work expected in a production frontend role:

- Preserving working business logic while redesigning the presentation layer.
- Keeping Sanity data, dynamic routes, cart state, and Stripe checkout intact during a visual overhaul.
- Improving responsive behavior without changing frameworks or adding unnecessary dependencies.
- Tightening accessibility and interaction details in product, cart, and success flows.
- Validating changes with build, lint, and local browser smoke testing.

## Local Development

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

If port 3000 is already in use:

```bash
npm run dev -- -p 3002
```

## Validation

```bash
npm run lint
npm run build
```

Current validation status:

- `npm run lint` passes with warnings for raw `<img>` usage. These are intentional for the current Sanity image rendering approach.
- `npm run build` passes.
- Local smoke testing covered homepage rendering, product navigation, product gallery selection, quantity changes, cart subtotal, remove/empty state, success page, and responsive widths down to 320px.

## Environment Variables

The app expects Sanity and Stripe configuration through environment variables:

```text
NEXT_PUBLIC_SANITY_TOKEN=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_STRIPE_SECRET_KEY=
```

Sanity project details are configured in `lib/client.js`. Stripe Checkout sessions are created in `pages/api/stripe.js`.

## Future Improvements

- Replace raw `<img>` tags with `next/image` once Sanity image dimensions and remote image configuration are fully standardized.
- Add automated Playwright smoke tests for the cart and checkout flows.
- Add stronger loading and unavailable-product states for edge cases where CMS data is missing.
- Split some presentational pieces into smaller components if the app grows beyond the current route surface.

# Modern React E-commerce Application

A production-ready e-commerce application built with React, Next.js 16, and modern best practices. Perfect for developers transitioning from Vue to React.

## Features

- **Product Listing**: Browse products from Fake Store API with responsive grid layout
- **Search Functionality**: Real-time client-side search by product title
- **Product Details**: Detailed product pages with shareable URLs
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **State Management**: React Context API for global cart state
- **Custom Hooks**: Reusable hooks for data fetching and state management
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Loading States**: Skeleton loaders and proper error handling
- **Toast Notifications**: User feedback for cart actions

## Tech Stack

- **React 19.2**: Latest React with Canary features
- **Next.js 16**: App Router, Server Components, React Compiler
- **TypeScript**: Full type safety
- **Tailwind CSS v4**: Modern utility-first styling
- **Shadcn UI**: High-quality accessible components
- **Context API**: Global state management
- **React Hooks**: useState, useEffect, useMemo, useContext, custom hooks
- **React Router**: Built-in Next.js routing

## Project Structure

```
├── app/
│   ├── page.tsx              # Root redirect to /products
│   ├── layout.tsx            # Root layout with CartProvider
│   ├── globals.css           # Dark theme configuration
│   └── products/
│       ├── page.tsx          # Product listing page
│       └── [id]/
│           └── page.tsx      # Product detail page
├── components/
│   ├── header.tsx            # Navigation with cart icon
│   ├── cart-sheet.tsx        # Sliding cart panel
│   ├── product-card.tsx      # Product card component
│   └── products-loading.tsx  # Loading skeleton
├── contexts/
│   └── cart-context.tsx      # Cart state management
├── hooks/
│   ├── use-products.ts       # Fetch all products hook
│   └── use-product.ts        # Fetch single product hook
```

## Key React Concepts Demonstrated

### 1. Context API (Similar to Vue's Provide/Inject)
- `CartContext` provides global cart state
- `useCart` hook for consuming cart state
- localStorage integration for persistence

### 2. Custom Hooks (Similar to Vue Composables)
- `useProducts()` - Fetch and manage products list
- `useProduct(id)` - Fetch single product by ID
- Reusable data fetching logic with loading/error states

### 3. Component Composition
- Small, focused components
- Props for component communication
- Children pattern for flexible layouts

### 4. State Management
- `useState` for local component state
- `useEffect` for side effects and API calls
- `useMemo` for computed values (like Vue computed)
- Context API for global state

### 5. Routing (Next.js App Router)
- File-based routing
- Dynamic routes with `[id]`
- `useRouter` for programmatic navigation
- `useParams` for route parameters

## API Integration

Uses [Fake Store API](https://fakestoreapi.com/):
- `GET /products` - List all products
- `GET /products/:id` - Get product details

## Getting Started

1. The project is already set up and running.
2. Navigate to `/products` to see the product listing
3. Click any product to view details
4. Add items to cart and manage quantities
5. Cart persists in localStorage

## React vs Vue Comparison

## Best Practices Implemented

- TypeScript for type safety
- Custom hooks for reusable logic
- Proper error handling and loading states
- Accessible UI components (Shadcn)
- Mobile-first responsive design
- Clean component architecture
- localStorage for data persistence
- Toast notifications for UX feedback

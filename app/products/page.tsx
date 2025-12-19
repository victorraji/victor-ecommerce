"use client"

import { useState, useMemo, useEffect } from "react"
import { Search } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { fetchProducts } from "@/store/slices/products-slice"
import { addToCart } from "@/store/slices/cart-slice"
import type { Product } from "@/types"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { ProductCard } from "@/components/product-card"
import { ProductsLoading } from "@/components/products-loading"

export default function ProductsPage() {
  const dispatch = useAppDispatch()
  const { products, loading, error } = useAppSelector((state) => state.products)
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // Client-side search filtering
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products
    }

    return products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [products, searchQuery])

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }),
    )

    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <ProductsLoading />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-lg text-destructive">Error: {error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">Discover Products</h1>
            <p className="mt-2 text-muted-foreground text-pretty">
              Browse our curated collection of premium products from the Fake Store API
            </p>
          </div>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {searchQuery && (
            <p className="text-sm text-muted-foreground">
              Found {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <p className="text-lg text-muted-foreground">No products found matching "{searchQuery}"</p>
              <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2">
                Clear search
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

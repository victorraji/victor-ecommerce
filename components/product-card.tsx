"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden bg-secondary">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="h-full w-full object-contain p-4 transition-transform hover:scale-105"
          />
        </div>
      </Link>

      <CardContent className="flex flex-1 flex-col gap-2 p-4">
        <Badge variant="secondary" className="w-fit text-xs">
          {product.category}
        </Badge>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold leading-tight line-clamp-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

        <div className="mt-auto flex items-center gap-2">
          <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          {product.rating && (
            <span className="text-xs text-muted-foreground">
              ⭐ {product.rating.rate} ({product.rating.count})
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={(e) => {
            e.preventDefault()
            onAddToCart(product)
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

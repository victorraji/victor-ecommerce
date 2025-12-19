"use client"

import Link from "next/link"
import { ShoppingCart, Package } from "lucide-react"
import { useAppSelector } from "@/store/hooks"
import { Button } from "@/components/ui/button"
import { CartSheet } from "@/components/cart-sheet"

export function Header() {
  const totalItems = useAppSelector((state) => state.cart.totalItems)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/products" className="flex items-center gap-2 text-lg font-semibold">
          <Package className="h-6 w-6" />
          <span className="hidden sm:inline-block">Modern Store</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/products">
            <Button variant="ghost" className="text-foreground">
              Products
            </Button>
          </Link>

          <CartSheet>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </CartSheet>
        </nav>
      </div>
    </header>
  )
}

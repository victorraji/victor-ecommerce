"use client"

import type React from "react"

import { Provider } from "react-redux"
import { store } from "@/store"
import { useEffect } from "react"
import { initializeCart } from "@/store/slices/cart-slice"

function CartInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    store.dispatch(initializeCart())
  }, [])

  return <>{children}</>
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CartInitializer>{children}</CartInitializer>
    </Provider>
  )
}

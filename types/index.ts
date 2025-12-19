export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

export interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
}

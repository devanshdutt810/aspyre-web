import { Product } from "./products"

export type Cart = {
    product: Product
    selectedSize : string
    selectedColor : string
    quantity: number
}

export type CartCardProps = {
    carts : Cart[]
}
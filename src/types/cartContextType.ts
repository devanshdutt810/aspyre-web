import { Dispatch, SetStateAction } from "react"
import { Cart } from "./cart"

export type CartContextType = {
    cart:Cart[]
    setCart:Dispatch<SetStateAction<Cart[]>>
}
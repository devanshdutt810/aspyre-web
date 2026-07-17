import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export function useCart(){
    const cartCtx = useContext(CartContext)

    return cartCtx;
}
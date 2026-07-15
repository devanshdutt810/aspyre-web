import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export function UseCartCtxHook(){
    const cartCtx = useContext(CartContext)

    return cartCtx;
}
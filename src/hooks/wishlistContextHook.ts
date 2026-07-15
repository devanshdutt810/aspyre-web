import { WishlistContext } from "@/context/WishlistContext";
import { useContext } from "react";

export function UseWishlistCtxtHook(){
    const wishCtx = useContext(WishlistContext);

    return wishCtx;
}
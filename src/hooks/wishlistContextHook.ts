import { WishlistContext } from "@/context/WishlistContext";
import { useContext } from "react";

export function useWishlist(){
    const wishCtx = useContext(WishlistContext);

    return wishCtx;
}
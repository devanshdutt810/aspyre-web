import { WishlistContextType } from "@/types/wishlistContextType";
import { createContext } from "react";

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

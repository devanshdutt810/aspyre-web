"use client";
import { CartContextType } from "@/types/cartContextType";
import { createContext } from "react";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

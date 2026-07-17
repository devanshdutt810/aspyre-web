"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { CartContext } from "@/context/CartContext";
import { SearchContext } from "@/context/SearchContext";
import { WishlistContext } from "@/context/WishlistContext";
import { useState } from "react";
import { AddToCartBtnProps } from "@/types/addToCartBtnProps";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState(new Set<string>());
  const [cart, setCart] = useState<AddToCartBtnProps[]>([]);
  return (
    <WishlistContext.Provider value={{ favorites, setFavorites }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <SearchContext.Provider value={{ searchText, setSearchText }}>
          <Navbar />
          {children}
          <Footer />
        </SearchContext.Provider>
      </CartContext.Provider>
    </WishlistContext.Provider>
  );
}

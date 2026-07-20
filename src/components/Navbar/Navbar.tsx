"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearch } from "@/hooks/searchContextHook";
import { useWishlist } from "@/hooks/wishlistContextHook";
import Link from "next/link";
import { useCartActions } from "@/services/cart/cart.service";
import { json } from "stream/consumers";

export default function Navbar() {
  const [IsOpen, SetIsOpen] = useState(false);
  const [IsHover, SetIsHover] = useState(false);
  const searchCtx = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const wishlistCtx = useWishlist();
  const wishlistSize = wishlistCtx?.favorites.size ?? 0;
  const cartActions = useCartActions();
  const cartLength = cartActions.getCartSize();
  const previousSearchQuery = useRef("");

  function showToolTip() {
    SetIsHover(true);
  }

  function HideToolTip() {
    SetIsHover(false);
  }

  const tooltipClass = IsHover
    ? "absolute bg-[#202020] rounded-xl p-5 text-white w-fit right-5"
    : "absolute bg-[#202020] rounded-xl p-5 text-white w-fit right-5 hidden";
  const NavBarClasses = `bg-[#EEECE1] w-fit flex flex-col justify-center gap-5 p-5 rounded-xl absolute border-1 ${!IsOpen ? "hidden" : ""}`;
  const MenuIcon = `${IsOpen ? "/icon/menuOpen.png" : "/icon/menuClose.png"}`;

  function handleMenuShow() {
    SetIsOpen(!IsOpen);
  }

  function handleSearchQuery() {
    const searchQuery = inputRef.current?.value;

    if (searchCtx) {
      previousSearchQuery.current = searchCtx?.searchText;
      searchCtx.setSearchText(searchQuery ?? "");
    }
    if (searchCtx?.searchText && previousSearchQuery.current) {
      console.log(searchCtx.searchText, previousSearchQuery.current);
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="p-5 bg-[#A3B087] relative z-99">
      <div className="flex gap-5 justify-between">
        <button className="cursor-pointer" onClick={handleMenuShow}>
          <Image
            src={MenuIcon}
            width={24}
            height={24}
            alt="Aspyre Logo"
          ></Image>
        </button>
        <div className="flex gap-1 bg-stone-300 p-2 rounded-xl">
          <input
            ref={inputRef}
            className="w-100 text-center focus:outline-none focus:ring-0"
            name="searchInput"
            placeholder="Search"
          />
          <button className="cursor-pointer" onClick={handleSearchQuery}>
            <Image
              src="/icon/search-interface-symbol.png"
              width={24}
              height={24}
              alt="Aspyre Logo"
              className="rotate-90"
            ></Image>
          </button>
        </div>

        <div className="flex">
          <div
            onMouseEnter={showToolTip}
            onMouseLeave={HideToolTip}
            className="mr-5 cursor-pointer"
          >
            <h1 className="bg-[#202020] p-2 rounded-xl text-white m-2">
              ❤️ {wishlistSize}
            </h1>
          </div>
          <Link href="/cart">
            <h1 className="bg-[#202020] p-2 rounded-xl text-white m-2">
              🛒 {cartLength}
            </h1>
          </Link>
        </div>
      </div>
      <div className={tooltipClass}>
        <h1>You have added {wishlistSize} Products to Favorites</h1>
      </div>

      <div id="NavBar" className={NavBarClasses}>
        <h3>Home</h3>
        <h3>Aspyre Bestsellers</h3>
        <h3>All Collections</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
}

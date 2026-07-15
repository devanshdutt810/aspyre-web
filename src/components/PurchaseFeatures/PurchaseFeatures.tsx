"use client";

import SizesBtn from "../SizesBtn/SizesBtn";
import QuantityBtn from "../QuantityBtn/QuantityBtn";
import WishlistBtn from "../Wishlist/WishlistBtn";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { ProductCardProps } from "@/types/products";
import { useState } from "react";

export default function PurchaseFeatures({ product }: ProductCardProps) {
  const [SizeSelected, SetSizeSelected] = useState(product.sizes[0]);
  const [Quantity, SetQuantity] = useState(0);

  function handleQuantityDecrease(qty: number) {
    if (qty > 0) {
      SetQuantity(qty - 1);
    }
  }

  function handleQuantityIncrease(qty: number) {
    SetQuantity(qty + 1);
  }

  function OnSizeSelected(size: string) {
    SetSizeSelected(size);
  }

  const wishlistBtnStyle =
    "p-2 bg-[#202020] text-white cursor-pointer rounded-xl";
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 m-5">
        <SizesBtn
          sizes={product.sizes}
          sizeSelected={SizeSelected}
          onSizeSelected={OnSizeSelected}
        />
      </div>
      <QuantityBtn
        qty={Quantity}
        handleQtyInc={handleQuantityIncrease}
        handleQtyDec={handleQuantityDecrease}
      />
      <div className="flex gap-5">
        <WishlistBtn
          id={product.id}
          name={product.name}
          style={wishlistBtnStyle}
        />

        <AddToCartBtn
          product={product}
          selectedSize={SizeSelected}
          selectedColor={"White"}
          quantity={Quantity}
        />
        <button className="p-2 bg-[#202020] text-white cursor-pointer rounded-xl">
          Buy Now
        </button>
      </div>
    </div>
  );
}

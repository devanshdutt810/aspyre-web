"use client";
import BackButton from "@/components/BackButton/BackButton";
import QuantityBtn from "@/components/QuantityBtn/QuantityBtn";
import { UseCartCtxHook } from "@/hooks/cartContextHook";
import { Cart } from "@/types/cart";
import Image from "next/image";
import { useState } from "react";

function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

function CartCards({
  product,
  selectedSize,
  selectedColor,
  quantity,
}: Cart): React.JSX.Element {
  const cartCtx = UseCartCtxHook();
  const carts = cartCtx?.cart;
  const setCart = cartCtx?.setCart;
  const [Quantity, SetQuantity] = useState(quantity);
  const key = `${product.id}-${selectedSize}-${selectedColor}-${quantity}`;

  function handleQuantityIncrease() {
    if (setCart) {
      const nextQty = Quantity + 1;
      SetQuantity(nextQty);

      // Update global context
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
            ? { ...item, quantity: nextQty }
            : item,
        ),
      );
    }
  }

  function handleQuantityDecrease() {
    if (Quantity > 1 && setCart) {
      const nextQty = Quantity - 1;
      SetQuantity(nextQty);

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
            ? { ...item, quantity: nextQty }
            : item,
        ),
      );
    }
  }

  function handleItemDelete() {
    if (!setCart) return;

    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.product.id === product.id &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor &&
            item.quantity === Quantity
          ),
      ),
    );
  }

  return (
    <div className="flex gap-2 bg-[#202020] p-5 m-5 text-white text-center rounded-2xl justify-evenly w-200">
      <Image
        className="rounded-xl"
        src={product.imgSource}
        width={200}
        height={200}
        alt={product.name}
      ></Image>
      <div className="flex flex-col">
        <h1>{product.name}</h1>
        <h1>{truncateString(product.description, 50)}</h1>
        <div className="flex gap-5 m-5">
          <div className="bg-[#E0E0E0] w-10 text-center rounded-xl p-2 text-black">
            {selectedSize}
          </div>
          <div className="bg-[#E0E0E0] w-20 text-center rounded-xl p-2 text-black">
            {selectedColor}
          </div>
        </div>
        <QuantityBtn
          qty={Quantity}
          handleQtyInc={handleQuantityIncrease}
          handleQtyDec={handleQuantityDecrease}
        />
        <h1 className="font-semibold text-2xl">{product.price}</h1>
      </div>
      <button
        className="h-fit bg-[#E0E0E0] p-2 rounded-xl w-10 cursor-pointer"
        onClick={handleItemDelete}
      >
        ❌
      </button>
    </div>
  );
}

export default function CartScreen() {
  const cartCtx = UseCartCtxHook();
  const carts = cartCtx?.cart;
  const isCartAvailable = carts && carts.length > 0;
  const totalItemsStr =
    carts && carts?.length > 0
      ? `You have ${carts.length} ${carts.length > 1 ? "items" : "item"} in your cart`
      : `No Items! Keep Shopping`;
  return (
    <div className="">
      <BackButton />
      <div className="text-center text-4xl font-semibold">
        <h1>{totalItemsStr}</h1>
      </div>
      {isCartAvailable &&
        carts.map((c) => (
          <CartCards
            key={`${c.product.id}-${c.selectedSize}-${c.selectedColor}`}
            {...c}
          />
        ))}
    </div>
  );
}

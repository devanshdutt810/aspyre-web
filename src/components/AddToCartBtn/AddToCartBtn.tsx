"use client";

import { UseCartCtxHook } from "@/hooks/cartContextHook";
import { Cart } from "@/types/cart";

export default function AddToCartBtn(CurrentCart: Cart) {
  const cartCtx = UseCartCtxHook();
  const setCart = cartCtx?.setCart;

  function handleCartAssignment() {
    if (!setCart || !CurrentCart || CurrentCart.quantity <= 0) return;

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.product.id === CurrentCart.product.id &&
          item.selectedSize === CurrentCart.selectedSize &&
          item.selectedColor === CurrentCart.selectedColor,
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity:
            updatedCart[existingItemIndex].quantity + CurrentCart.quantity,
        };
        return updatedCart;
      }

      const newCartItem: Cart = {
        product: CurrentCart.product,
        selectedSize: CurrentCart.selectedSize,
        selectedColor: CurrentCart.selectedColor,
        quantity: CurrentCart.quantity,
      };

      return [...prevCart, newCartItem];
    });
  }

  return (
    <button
      className="p-2 bg-[#202020] text-white cursor-pointer rounded-xl"
      onClick={handleCartAssignment}
    >
      Add To Cart
    </button>
  );
}

"use client";
import { useCart } from "@/hooks/cartContextHook";
import {
  GetBillingConstants,
  getDiscountPercentage,
} from "@/lib/getBillingConstants";
import { AddToCartBtnProps } from "@/types/addToCartBtnProps";
import { useState } from "react";

export function useCartActions() {
  const [quantity, setQuantity] = useState(1);
  const cartCtx = useCart();
  const cart = cartCtx?.cart;
  const setCart = cartCtx?.setCart;

  function addItem({ CurrentCart }: AddToCartBtnProps) {
    if (!setCart || !CurrentCart || CurrentCart.quantity <= 0) return;

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.CurrentCart.product.id === CurrentCart.product.id &&
          item.CurrentCart.selectedSize === CurrentCart.selectedSize &&
          item.CurrentCart.selectedColor === CurrentCart.selectedColor,
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          CurrentCart: {
            ...updatedCart[existingItemIndex].CurrentCart,
            quantity:
              updatedCart[existingItemIndex].CurrentCart.quantity +
              CurrentCart.quantity,
          },
        };
        return updatedCart;
      }

      const newCartItem: AddToCartBtnProps = {
        CurrentCart: CurrentCart,
      };

      return [...prevCart, newCartItem];
    });
  }

  function increaseQuantity({ CurrentCart }: AddToCartBtnProps) {
    if (setCart) {
      const nextQty = quantity + 1;
      setQuantity(nextQty);

      // Update global context
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.CurrentCart.product.id === CurrentCart.product.id &&
          item.CurrentCart.selectedSize === CurrentCart.selectedSize &&
          item.CurrentCart.selectedColor === CurrentCart.selectedColor
            ? { ...item, quantity: nextQty }
            : item,
        ),
      );
    }
  }

  function decreaseQuantity({ CurrentCart }: AddToCartBtnProps) {
    if (quantity > 1 && setCart) {
      const nextQty = quantity - 1;
      setQuantity(nextQty);

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.CurrentCart.product.id === CurrentCart.product.id &&
          item.CurrentCart.selectedSize === CurrentCart.selectedSize &&
          item.CurrentCart.selectedColor === CurrentCart.selectedColor
            ? { ...item, quantity: nextQty }
            : item,
        ),
      );
    }
  }

  function removeItem({ CurrentCart }: AddToCartBtnProps) {
    if (!setCart) return;

    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.CurrentCart.product.id === CurrentCart.product.id &&
            item.CurrentCart.selectedSize === CurrentCart.selectedSize &&
            item.CurrentCart.selectedColor === CurrentCart.selectedColor
          ),
      ),
    );
  }

  function getCartSize() {
    return cart ? cart.length : 0;
  }

  function getSubTotal() {
    let subTotal: number = 0;
    if (cart) {
      cart?.forEach((pr) => {
        subTotal += Number(pr.CurrentCart.product.price);
      });
    }

    return subTotal;
  }

  function getCGST() {
    const subTotal = getSubTotal();
    const cgst = GetBillingConstants(subTotal).cgst;

    return (cgst / 100) * subTotal;
  }

  function getSGST() {
    const subTotal = getSubTotal();
    const sgst = GetBillingConstants(subTotal).sgst;

    return (sgst / 100) * subTotal;
  }

  function getGrandTotal(discountCode: string) {
    const subTotal = getSubTotal();
    const CGST = getCGST();
    const SGST = getSGST();
    const discount = getDiscount(discountCode);

    return subTotal + CGST + SGST - discount;
  }

  function getDiscount(code: string) {
    const subTotal = getSubTotal();
    const discountPerc = getDiscountPercentage(code);
    let discount = 0;
    if (discountPerc > 0) {
      discount = (discountPerc / 100) * subTotal;
    }
    return discount;
  }

  return {
    cart,
    quantity,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    getCartSize,
    getSubTotal,
    getCGST,
    getSGST,
    getGrandTotal,
    getDiscount,
  };
}

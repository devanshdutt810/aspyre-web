"use client";
import BackButton from "@/components/BackButton/BackButton";
import QuantityBtn from "@/components/QuantityBtn/QuantityBtn";
import { useCartActions } from "@/services/cart/cart.service";
import { AddToCartBtnProps } from "@/types/addToCartBtnProps";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

function CartCards({ CurrentCart }: AddToCartBtnProps): React.JSX.Element {
  const CartActions = useCartActions();

  function handleQuantityIncrease() {
    CartActions.increaseQuantity({ CurrentCart });
  }
  function handleQuantityDecrease() {
    CartActions.decreaseQuantity({ CurrentCart });
  }
  function handleItemDelete() {
    CartActions.removeItem({ CurrentCart });
  }

  return (
    <div className="flex gap-2 bg-[#202020] p-5 text-white rounded-2xl justify-evenly w-200">
      <Image
        className="rounded-xl"
        src={CurrentCart.product.imgSource}
        width={200}
        height={200}
        alt={CurrentCart.product.name}
      ></Image>
      <div className="flex flex-col">
        <h1>{CurrentCart.product.name}</h1>
        <h1>{truncateString(CurrentCart.product.description, 50)}</h1>
        <div className="flex gap-5 m-5">
          <div className="bg-[#E0E0E0] w-10 text-center rounded-xl p-2 text-black">
            {CurrentCart.selectedSize}
          </div>
          <div className="bg-[#E0E0E0] w-20 text-center rounded-xl p-2 text-black">
            {CurrentCart.selectedColor}
          </div>
        </div>
        <QuantityBtn
          qty={CartActions.quantity}
          handleQtyInc={handleQuantityIncrease}
          handleQtyDec={handleQuantityDecrease}
        />
        <h1 className=" text-xl mt-2">Price - ${CurrentCart.product.price}</h1>
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
  const cartActions = useCartActions();
  const cartSize = cartActions.getCartSize();
  const isCartAvailable = cartSize > 0;
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  function handleDiscountCode() {
    setDiscount(cartActions.getDiscount(discountCode.toLocaleUpperCase()));
  }

  let SubTotal,
    CGST,
    SGST,
    GrandTotal = 0;

  if (isCartAvailable) {
    SubTotal = cartActions.getSubTotal();
    CGST = cartActions.getCGST();
    SGST = cartActions.getSGST();
    GrandTotal = cartActions.getGrandTotal(discountCode.toLocaleUpperCase());
  }

  const totalItemsStr = isCartAvailable
    ? `You have ${cartSize} ${cartSize > 1 ? "items" : "item"} in your cart`
    : `No Items! Keep Shopping`;
  return (
    <>
      <BackButton />
      <div className=" flex flex-col items-center gap-4">
        <div className="text-center text-4xl font-semibold m-5">
          <h1>{totalItemsStr}</h1>
        </div>
        {!isCartAvailable && (
          <Link href="/">
            <div className="bg-[#202020] p-3 text-white rounded-xl">
              Continue to Home
            </div>
          </Link>
        )}
        {isCartAvailable &&
          cartActions.cart?.map((c) => (
            <CartCards
              CurrentCart={c.CurrentCart}
              key={`${c.CurrentCart.product.id}-${c.CurrentCart.selectedSize}-${c.CurrentCart.selectedColor}`}
            />
          ))}
        {isCartAvailable && (
          <div className="bg-[#BDB7AB] m-5 w-200 p-5 rounded-xl">
            <div className="flex gap-4 justify-center items-center">
              <h1>Have a Code?</h1>
              <div className="flex flex-col gap-1 items-center">
                <input
                  className="border-1 w-50 bg-[#544C44] text-white rounded-xl p-2 italic text-center"
                  type="text"
                  placeholder="WELCOME10"
                  onChange={(e) => {
                    setDiscountCode(e.target.value);
                  }}
                ></input>
                <button
                  className="text-xs bg-[#202020] text-white p-1 rounded-xl w-20"
                  onClick={handleDiscountCode}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="text-sm mt-3 mb-3 flex justify-between">
              <h1>Subtotal</h1>
              <h1>${SubTotal}</h1>
            </div>
            <hr className="mt-2 mb-2 bg-neutral-quaternary border-0.5"></hr>
            <div className="text-sm mt-3 mb-3 flex justify-between">
              <h1>CGST</h1>
              <h1>${CGST}</h1>
            </div>
            <hr className="mt-2 mb-2 bg-neutral-quaternary border-0.5"></hr>
            <div className="text-sm mt-3 mb-3 flex justify-between">
              <h1>SGST</h1>
              <h1>${SGST}</h1>
            </div>
            <hr className="mt-2 mb-2 bg-neutral-quaternary border-0.5"></hr>

            <div className="text-sm mt-3 mb-3 flex justify-between">
              <h1>Discount</h1>
              <h1>${discount}</h1>
            </div>

            <div className="text-xl font-semibold italic mt-3 mb-3 flex justify-between bg-[#363636] text-white p-3 rounded-xl">
              <h1>Grand Total</h1>
              <h1>${GrandTotal}</h1>
            </div>
            <div className="grid place-items-center text-white">
              <button className="bg-[#202020] w-50 p-3 rounded-xl">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

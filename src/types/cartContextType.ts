import { Dispatch, SetStateAction } from "react";
import { AddToCartBtnProps } from "./addToCartBtnProps";

export type CartContextType = {
  cart: AddToCartBtnProps[];
  setCart: Dispatch<SetStateAction<AddToCartBtnProps[]>>;
};

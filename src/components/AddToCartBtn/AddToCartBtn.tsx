import { useCartActions } from "@/services/cart/cart.service";
import { AddToCartBtnProps } from "@/types/addToCartBtnProps";

export default function AddToCartBtn({ CurrentCart }: AddToCartBtnProps) {
  const CartActions = useCartActions();
  function handleCartAssignment() {
    CartActions.addItem({ CurrentCart });
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

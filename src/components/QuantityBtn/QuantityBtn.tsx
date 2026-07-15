import { QuantityBtnProps } from "@/types/quantityBtnProp";

export default function QuantityBtn({
  qty,
  handleQtyInc,
  handleQtyDec,
}: QuantityBtnProps) {
  return (
    <div id="quantity" className="flex gap-2 p-2 m-2">
      <button
        className="p-2 bg-[#202020] text-white cursor-pointer rounded-xl w-10"
        onClick={() => handleQtyInc(qty)}
      >
        ＋
      </button>
      <h1 className="p-2 border-1 text-center rounded-xl w-10">{qty}</h1>
      <button
        className="p-2 bg-[#202020] text-white cursor-pointer rounded-xl w-10"
        onClick={() => handleQtyDec(qty)}
      >
        −
      </button>
    </div>
  );
}

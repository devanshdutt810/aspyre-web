import { SizeBtnProps } from "@/types/sizeBtn";

export default function SizesBtn({
  sizes,
  sizeSelected,
  onSizeSelected,
}: SizeBtnProps) {
  return sizes.map((s) => (
    <button
      className={
        sizeSelected === s
          ? "p-3 border bg-[#202020] text-white rounded-xl w-fit cursor-pointer"
          : "p-3 border rounded-xl w-fit cursor-pointer"
      }
      key={s}
      onClick={() => onSizeSelected(s)}
    >
      {s}
    </button>
  ));
}

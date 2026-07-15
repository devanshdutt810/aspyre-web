"use client";

import { UseWishlistCtxtHook } from "@/hooks/wishlistContextHook";
import { WishlistBtnProps } from "@/types/wishlistBtnProp";
import PopUp from "../PopUp/PopUp";

export default function WishlistBtn({ id, name, style }: WishlistBtnProps) {
  const wishCtx = UseWishlistCtxtHook();
  const favorites = wishCtx?.favorites;
  const setFavorites = wishCtx?.setFavorites;

  const FavIcon = favorites?.has(id) ? "❤️" : "🤍";

  const content = `${name} added to Favorites ❤️`;
  const color = "#f06b04";

  function handleFavClick() {
    if (setFavorites) {
      setFavorites((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    }
  }

  return (
    <>
      {favorites?.has(id) && <PopUp content={content} colorCode={color} />}
      <button className={style} onClick={handleFavClick}>
        {FavIcon}
      </button>
    </>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { product, FeaturedProductsProps } from "../../types/products";
import PopUp from "../PopUp/PopUp";
import { console } from "inspector";

function ProductCard(Product: product): React.JSX.Element {
  const content = `${Product.name} added to Favorites ❤️`;
  const color = "#f06b04";
  const FavIcon = Product.isFavorite ? "❤️" : "🤍";

  function handleFavClick() {
    Product.onToggleFavorite(Product.id);
  }
  return (
    <>
      {Product.isFavorite && <PopUp content={content} colorCode={color} />}
      <div className="relative flex flex-col justify-center items-center bg-[#202020] rounded-xl p-2 m-2">
        <p className="bg-[#EEECE1] w-fit pl-2 pr-2 absolute top-2 right-2 text-center rounded-xl">
          {Product.badge}
        </p>
        <button
          onClick={handleFavClick}
          className="w-fit pl-2 pr-2 absolute top-2 left-2 text-center text-2x cursor-pointer"
        >
          {FavIcon}
        </button>

        <Image
          className="rounded-full"
          src={Product.imgSource}
          width={150}
          height={150}
          alt={Product.name}
        ></Image>
        <h3 className="text-white text-center mt-2">{Product.name}</h3>
        <h3 className="text-white text-center mt-2">{Product.sizes}</h3>
        <h3 className="text-white text-center mt-2">{Product.price}</h3>
      </div>
    </>
  );
}

export default function FeaturedProducts({
  products,
  noOfProducts,
  updateFavSizeFP,
}: FeaturedProductsProps) {
  const [Favorites, SetFavorites] = useState<Set<string>>(new Set<string>());
  const [showAllBtn, SetShowAllBtn] = useState(false);

  const handleFavorites = (id: string) => {
    SetFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      updateFavSizeFP(next.size);
      return next;
    });
  };

  function handleShowAll() {
    SetShowAllBtn(!showAllBtn);
  }
  if (noOfProducts > 0) {
    const tProductsH1 = `${noOfProducts} Products`;
    const first6Products = products.slice(0, 5);
    return (
      <>
        <h1 className="m-5 text-center text-2xl italic">
          Best-Seller Products
        </h1>
        <h1 className="m-5 text-2xl italic">{tProductsH1}</h1>
        <div className="grid grid-cols-4 gap-4">
          {showAllBtn
            ? products.map((c) => (
                <ProductCard
                  key={c.id}
                  imgSource={c.imgSource}
                  name={c.name}
                  sizes={c.sizes}
                  price={c.price}
                  badge={c.badge}
                  id={c.id}
                  isFavorite={Favorites.has(c.id)}
                  onToggleFavorite={() => handleFavorites(c.id)}
                />
              ))
            : first6Products.map((c) => (
                <ProductCard
                  key={c.id}
                  imgSource={c.imgSource}
                  name={c.name}
                  sizes={c.sizes}
                  price={c.price}
                  badge={c.badge}
                  id={c.id}
                  isFavorite={Favorites.has(c.id)}
                  onToggleFavorite={() => handleFavorites(c.id)}
                />
              ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleShowAll}
            className="pt-2 pb-2 pl-4 pr-4 m-5 bg-[#202020] w-fit rounded-xl text-white"
          >
            {showAllBtn ? "Show Less" : "Show More"}
          </button>
        </div>
      </>
    );
  } else {
    return (
      <h1 className="m-5 text-center text-2xl italic">No Products Found !</h1>
    );
  }
}

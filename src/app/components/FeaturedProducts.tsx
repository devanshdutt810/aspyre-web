import React from "react";
import Image from "next/image";
import { ProductProps, FeaturedProductsProps } from "../types/products";

function ProductCard({
  id,
  imgSource,
  name,
  sizes,
  price,
  badge,
}: ProductProps) {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center bg-[#202020] rounded-xl p-2 m-2">
        <div className="bg-[#EEECE1] w-fit pl-2 pr-2 absolute top-2 right-2 text-center rounded-xl">
          <p>{badge}</p>
        </div>
        <Image
          className="rounded-full"
          src={imgSource}
          width={150}
          height={150}
          alt="Aspyre Logo"
        ></Image>
        <h3 className="text-white text-center mt-2">{name}</h3>
        <h3 className="text-white text-center mt-2">{sizes}</h3>
        <h3 className="text-white text-center mt-2">{price}</h3>
      </div>
    </>
  );
}

export default function FeaturedProducts({
  ProductsData,
}: FeaturedProductsProps) {
  return (
    <>
      <h1 className="m-5 text-center text-2xl italic">Best-Seller Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {ProductsData.map((c) => (
          <ProductCard
            key={c.id}
            imgSource={c.imgSource}
            name={c.name}
            sizes={c.sizes}
            price={c.price}
            badge={c.badge}
            id={c.id}
          />
        ))}
      </div>
    </>
  );
}

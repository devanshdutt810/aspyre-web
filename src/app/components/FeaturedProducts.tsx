import React from "react";
import Image from "next/image";
interface products {
  imgSource: string;
  name: string;
  sizes: string;
  price: string;
}

function ProductCard(src: string, name: string, sizes: string, price: string) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#202020] rounded-xl p-2 m-2">
      <Image
        className="rounded-full"
        src={src}
        width={150}
        height={150}
        alt="Aspyre Logo"
      ></Image>
      <h3 className="text-white text-center mt-2">{name}</h3>
      <h3 className="text-white text-center mt-2">{sizes}</h3>
      <h3 className="text-white text-center mt-2">{price}</h3>
    </div>
  );
}

export default function FeaturedProducts() {
  const products: products[] = [
    {
      imgSource: "/collections/col1.webp",
      name: "Coord Set",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col2.webp",
      name: "Dress",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col3.webp",
      name: "White Dress",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col4.webp",
      name: "Liquid coco",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col5.webp",
      name: "Jacket",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col1.webp",
      name: "Coord Set",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col2.webp",
      name: "Dress",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col3.webp",
      name: "White Dress",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col4.webp",
      name: "Liquid coco",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col5.webp",
      name: "Jacket",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col1.webp",
      name: "Coord Set",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col2.webp",
      name: "Dress",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col3.webp",
      name: "White Dress",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col4.webp",
      name: "Liquid coco",
      sizes: "S-M-L-XL",
      price: "$100",
    },
    {
      imgSource: "/collections/col5.webp",
      name: "Jacket",
      sizes: "S-M-L-XL",
      price: "$100",
    },
  ];
  return (
    <>
      <h1 className="m-5 text-center text-2xl italic">Best-Seller Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((c) =>
          ProductCard(c.imgSource, c.name, c.sizes, c.price),
        )}
      </div>
    </>
  );
}

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ProductCardProps, FeaturedProductsProps } from "../../types/products";
import Link from "next/link";
import WishlistBtn from "../Wishlist/WishlistBtn";

function ProductCard({ product }: ProductCardProps): React.JSX.Element {
  let sizes = "(";
  product.sizes.forEach((s) => {
    sizes += s;
    sizes += ",";
  });

  let availableSizes = sizes.slice(0, -1);
  availableSizes += ")";

  const productLink = `/products/${product.slug}`;
  const wishlistBtnStyle =
    "w-fit pl-2 pr-2 absolute top-2 left-2 text-center text-2x cursor-pointer";

  const productsClicked = useRef(0);

  function handleProductClickCount() {
    productsClicked.current += 1;
    console.log(productsClicked.current);
  }

  return (
    <>
      <div className="relative flex flex-col justify-center items-center bg-[#202020] rounded-xl p-2 m-2">
        <p className="bg-[#EEECE1] w-fit pl-2 pr-2 absolute top-2 right-2 text-center rounded-xl">
          {product.badge}
        </p>
        <WishlistBtn
          id={product.id}
          name={product.name}
          style={wishlistBtnStyle}
        />
        <Image
          className="rounded-full"
          src={product.imgSource}
          width={150}
          height={150}
          alt={product.name}
        ></Image>
        <h3 className="text-white text-center mt-2">{product.name}</h3>
        <h3 className="text-white text-center mt-2">{availableSizes}</h3>
        <h3 className="text-white text-center mt-2">${product.price}</h3>
        <Link href={productLink} key={product.slug}>
          <div
            className="bg-[#EEECE1] p-2 rounded-xl m-2"
            onClick={handleProductClickCount}
          >
            View Product
          </div>
        </Link>
      </div>
    </>
  );
}

export default function FeaturedProducts({
  products,
  noOfProducts,
}: FeaturedProductsProps) {
  const [showAllBtn, SetShowAllBtn] = useState(false);

  function handleShowAll() {
    SetShowAllBtn((prev) => !prev);
  }

  // function createProduct(product: ProductCardProps) {
  //   return <ProductCard key={product.product.id} product={product.product} />;
  // }

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
                <ProductCard key={c.product.id} product={c.product} />
              ))
            : first6Products.map((c) => (
                <ProductCard key={c.product.id} product={c.product} />
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

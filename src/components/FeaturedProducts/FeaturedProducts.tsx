"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  ProductCardProps,
  FeaturedProductsProps,
  FilterBtnProps,
} from "../../types/products";
import Link from "next/link";
import WishlistBtn from "../Wishlist/WishlistBtn";

function FilterDropDown({ products, setCategory }: FilterBtnProps) {
  const Categories = new Set<string>();
  Categories.add("All");
  let id = 1;
  products.forEach((pr) => {
    Categories.add(pr.product.category);
  });
  const [IsVisible, SetIsVisible] = useState(false);
  return (
    <>
      <div className="relative right-0">
        <button
          className="cursor-pointer"
          onClick={() => {
            SetIsVisible((prev) => !prev);
          }}
        >
          <Image
            className="rounded-full"
            src={"/icon/filter.png"}
            width={30}
            height={30}
            alt="filter"
          ></Image>
        </button>
        {IsVisible && (
          <div className="absolute flex flex-col bg-[#202020] p-2 rounded-xl z-99 right-1 w-50">
            {[...Categories].map((cat) => (
              <button
                key={id++}
                className="bg-[#E0E0E0] p-2 rounded-xl m-1 cursor-pointer"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

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
          <div className="bg-[#EEECE1] p-2 rounded-xl m-2">View Product</div>
        </Link>
      </div>
    </>
  );
}

export default function FeaturedProducts({
  products,
  noOfProducts,
}: FeaturedProductsProps) {
  const [showAllBtn, SetShowAllBtn] = useState(true);
  const [SelectedCategory, SetSelectedCategory] = useState("");
  const ProductGrid = useRef<HTMLDivElement>(null);

  function setCategory(category: string) {
    SetSelectedCategory(category);
  }

  const productsClicked = useRef(0);

  function handleProductClickCount() {
    productsClicked.current += 1;
    console.log(productsClicked.current);
  }

  useEffect(() => {
    ProductGrid.current?.scrollIntoView({ behavior: "smooth" });
  }, [SelectedCategory]);

  function handleShowAll() {
    SetShowAllBtn((prev) => !prev);
  }

  const SelectedCategoryProducts = useMemo(() => {
    console.log("Filtering products...");
    return SelectedCategory !== "" && SelectedCategory !== "All"
      ? products.filter((p) => p.product.category === SelectedCategory)
      : products;
  }, [SelectedCategory, products]);

  const first6Products = useMemo(() => {
    return SelectedCategoryProducts.slice(0, 5);
  }, [SelectedCategoryProducts]);

  const tProductsH1 = useMemo(() => {
    return `${SelectedCategoryProducts.length} Products`;
  }, [SelectedCategoryProducts]);

  if (noOfProducts > 0) {
    return (
      <div ref={ProductGrid}>
        <h1 className="m-5 text-center text-2xl italic">
          Best-Seller Products
        </h1>
        <div className="flex justify-between m-5">
          <h1 className="m-5 text-2xl italic">{tProductsH1}</h1>
          <FilterDropDown products={products} setCategory={setCategory} />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {showAllBtn
            ? SelectedCategoryProducts.map((c) => (
                <div key={c.product.id} onClick={handleProductClickCount}>
                  <ProductCard product={c.product} />
                </div>
              ))
            : first6Products.map((c) => (
                <div key={c.product.id} onClick={handleProductClickCount}>
                  <ProductCard product={c.product} />
                </div>
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
        <FilterDropDown products={products} setCategory={setCategory} />
      </div>
    );
  } else {
    return (
      <h1 className="m-5 text-center text-2xl italic">No Products Found !</h1>
    );
  }
}

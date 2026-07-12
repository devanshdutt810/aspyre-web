"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedCollections from "@/components/FeaturedCollections/FeaturedCollections";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import fetchCollectionsData from "@/data/collections";
import fetchProductsData from "@/data/products";
import { ProductCardProps } from "@/types/products";

function HomePage() {
  const collectionsData = fetchCollectionsData();

  const products = fetchProductsData();

  const lstProduct: ProductCardProps[] = products.map((prod) => ({
    product: prod,
    isFavorite: false,
    onToggleFavorite: () => {},
  }));

  const [FavoritesSize, SetFavoritesSize] = useState(0);
  const [SearchText, SetSearchText] = useState("");

  const fetchSearchQuery = (searchQuery: string) => {
    SetSearchText(searchQuery);
  };

  const handleFavoritesSize = (size: number) => {
    SetFavoritesSize(size);
  };

  return (
    <>
      <Navbar FavoritesSize={FavoritesSize} GetSearchQuery={fetchSearchQuery} />
      <Hero />
      <FeaturedCollections collections={collectionsData} />
      <FeaturedProducts
        products={
          SearchText !== "" && SearchText !== undefined
            ? lstProduct.filter((p) =>
                p.product.name
                  .toLocaleLowerCase()
                  .includes(SearchText.toLocaleLowerCase()),
              )
            : lstProduct
        }
        noOfProducts={
          SearchText !== "" && SearchText !== undefined
            ? lstProduct.filter((p) =>
                p.product.name
                  .toLowerCase()
                  .includes(SearchText.toLocaleLowerCase()),
              ).length
            : lstProduct.length
        }
        updateFavSizeFP={handleFavoritesSize}
      />
    </>
  );
}

export default HomePage;

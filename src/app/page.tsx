"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedCollections from "@/components/FeaturedCollections/FeaturedCollections";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Footer from "../components/Footer/Footer";
import fetchCollectionsData from "@/data/collections";
import fetchProductsData from "@/data/products";

function HomePage() {
  const collectionsData = fetchCollectionsData();

  const products = fetchProductsData();
  // Ensure products conform to the expected `product` shape by adding
  // missing fields required by FeaturedProducts: isFavorite and onToggleFavorite
  const productsWithDefaults = products.map((p) => ({
    ...p,
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
            ? productsWithDefaults.filter((p) => p.name.includes(SearchText))
            : productsWithDefaults
        }
        noOfProducts={
          SearchText !== "" && SearchText !== undefined
            ? productsWithDefaults.filter((p) => p.name.includes(SearchText))
                .length
            : productsWithDefaults.length
        }
        updateFavSizeFP={handleFavoritesSize}
      />
      <Footer />
    </>
  );
}

export default HomePage;

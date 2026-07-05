import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import fetchCollectionsData from "@/data/collections";
import fetchProductsData from "@/data/products";

function page() {
  const collectionsData = fetchCollectionsData();

  const products = fetchProductsData();

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections collections={collectionsData} />
      <FeaturedProducts ProductsData={products} />
      <Footer />
    </>
  );
}

export default page;

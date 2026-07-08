import React from "react";
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

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections collections={collectionsData} />
      <FeaturedProducts products={products} noOfProducts={products.length} />
      <Footer />
    </>
  );
}

export default HomePage;

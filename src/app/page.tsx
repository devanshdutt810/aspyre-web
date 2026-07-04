import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default page;

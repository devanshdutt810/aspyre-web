"use client";

import Hero from "../components/Hero/Hero";
import FeaturedCollections from "@/components/FeaturedCollections/FeaturedCollections";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import fetchCollectionsData from "@/data/collections";
import fetchProductsData from "@/data/products";
import { ProductCardProps } from "@/types/products";
import { UseSearchCtxHook } from "@/hooks/searchContextHook";

function HomePage() {
  const collectionsData = fetchCollectionsData();

  const products = fetchProductsData();

  const lstProduct: ProductCardProps[] = products.map((prod) => ({
    product: prod,
    //isFavorite: wishCtx?.favorites.has(prod.id) ?? false,
  }));
  const searchCtx = UseSearchCtxHook();
  const SearchText = searchCtx?.searchText ?? "";

  return (
    <>
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
      />
    </>
  );
}

export default HomePage;

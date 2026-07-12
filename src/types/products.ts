export type Product = {
id:string;
category:string;
slug:string;
description:string;
  imgSource: string;
  name: string;
  sizes: string[];
  price: string;
  badge:string;
  
};

export type ProductCardProps={
  product:Product,
  isFavorite:boolean
  onToggleFavorite: (id: string) => void
}

export interface FeaturedProductsProps {
  products: ProductCardProps[];
  noOfProducts: number
  updateFavSizeFP: (size:number) => void
}
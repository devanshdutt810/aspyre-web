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
  //isFavorite:boolean
}

export interface FeaturedProductsProps {
  products: ProductCardProps[];
  noOfProducts: number
}
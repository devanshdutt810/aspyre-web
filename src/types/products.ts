export type product = {
id:string;
  imgSource: string;
  name: string;
  sizes: string;
  price: string;
  badge:string;
};

export interface FeaturedProductsProps {
  products: product[];
  noOfProducts: number
}
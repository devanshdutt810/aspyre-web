export interface ProductProps {
    id:string;
  imgSource: string;
  name: string;
  sizes: string;
  price: string;
  badge:string;
}

export interface FeaturedProductsProps {
  ProductsData: ProductProps[];
}
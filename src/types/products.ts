export type product = {
id:string;
  imgSource: string;
  name: string;
  sizes: string;
  price: string;
  badge:string;
  isFavorite:boolean
  onToggleFavorite: (id: string) => void
};

export interface FeaturedProductsProps {
  products: product[];
  noOfProducts: number
  updateFavSizeFP: (size:number) => void
}
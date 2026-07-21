export type Product = {
  id: string;
  category: string;
  slug: string;
  description: string;
  imgSource: string;
  name: string;
  sizes: string[];
  price: string;
  badge: string;
};

export type ProductCardProps = {
  product: Product;
};

export interface FeaturedProductsProps {
  products: ProductCardProps[];
  noOfProducts: number;
}

export type FilterBtnProps = {
  products: ProductCardProps[];
  setCategory: (category: string) => void;
};

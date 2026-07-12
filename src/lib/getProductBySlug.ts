import fetchProductsData from "@/data/products";

export default function getProductBySlug(slug:string){
    const Products = fetchProductsData();

    const fetched = Products.find(p => p.slug.toLocaleLowerCase() === slug.toLocaleLowerCase());

    return fetched ? fetched : null;

}
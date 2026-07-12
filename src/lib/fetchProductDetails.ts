import fetchProductsData from "@/data/products";

export default function fetchProductDetails(slug:string){
    const Products = fetchProductsData();

    const fetched = Products.filter(p => p.slug.toLocaleLowerCase() === slug.toLocaleLowerCase())[0];

    if(fetched){
        return JSON.stringify(fetched);
    }
    else{
        return "Product Now Found";
    }

}
import { product } from "@/types/products";
import fetchProductDetails from "@/lib/fetchProductDetails";
import Image from "next/image";
import BackButton from "@/components/BackButton/BackButton";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = fetchProductDetails(slug);

  if (data === "Product Now Found") {
    return <div>Product Not Found</div>;
  } else {
    function sizesBlock(sizes: string[]) {
      return sizes.map((s) => (
        <button
          className="p-3 border rounded-xl bg-[#202020] text-white w-fit cursor-pointer"
          key={s}
        >
          {s}
        </button>
      ));
    }
    const ProductDetails: product = JSON.parse(data);

    return (
      <>
        <div className="w-[100%] flex flex-col items-start">
          <BackButton />
          <div className="flex p-5 gap-5 items-center">
            <div className="relative">
              <Image
                className="rounded-xl"
                src={ProductDetails.imgSource}
                width={500}
                height={500}
                alt={ProductDetails.name}
              ></Image>
              <div className="absolute top-1 right-1 m-2 bg-[#202020] text-white p-2 rounded-xl">
                {ProductDetails.badge}
              </div>
            </div>

            <div className="w-full flex flex-col text-2xl">
              <h1 className="p-3 text-4xl m-5">{ProductDetails.name}</h1>
              <h1 className="p-3 m-5">{ProductDetails.description}</h1>
              <h1 className="p-3 m-5">{ProductDetails.price}</h1>
              <div className="flex gap-5 m-5">
                {sizesBlock(ProductDetails.sizes)}
              </div>
              <div className="flex gap-5">
                <button className="p-2 bg-[#202020] text-white cursor-pointer rounded-xl">
                  ❤️
                </button>
                <button className="p-2 bg-[#202020] text-white cursor-pointer rounded-xl">
                  Add To Cart
                </button>
                <button className="p-2 bg-[#202020] text-white cursor-pointer rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

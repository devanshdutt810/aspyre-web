import { Product } from "@/types/products";
import getProductBySlug from "@/lib/getProductBySlug";
import Image from "next/image";
import BackButton from "@/components/BackButton/BackButton";
import PageNotFound from "@/components/PageNotFount/PageNotFound";
import PurchaseFeatures from "@/components/PurchaseFeatures/PurchaseFeatures";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getProductBySlug(slug);

  if (data) {
    const ProductDetails: Product = data;
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

            <div className="w-full flex flex-col text-2xl text-center">
              <h1 className="p-2 text-4xl m-2">{ProductDetails.name}</h1>
              <h1 className="p-2 m-2">{ProductDetails.description}</h1>
              <h1 className="p-2 m-2">{ProductDetails.price}</h1>
              <PurchaseFeatures product={ProductDetails} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <PageNotFound />;
  }
}

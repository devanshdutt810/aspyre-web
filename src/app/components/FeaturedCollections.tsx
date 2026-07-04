import React from "react";
import Image from "next/image";

interface collection {
  imgSource: string;
  colName: string;
}

function CollectionCard(src: string, desc: string) {
  return (
    <div className="bg-[#202020] rounded-xl p-2 m-2">
      <Image src={src} width={280} height={280} alt="Aspyre Logo"></Image>
      <h3 className="text-white text-center mt-2">{desc}</h3>
    </div>
  );
}

export default function FeaturedCollections() {
  const collections: collection[] = [
    { imgSource: "/collections/col1.webp", colName: "Aspyre Bestsellers" },
    { imgSource: "/collections/col2.webp", colName: "The Dress Edit" },
    { imgSource: "/collections/col3.webp", colName: "The Business Edit" },
    { imgSource: "/collections/col4.webp", colName: "The Co-Ord Edit" },
    { imgSource: "/collections/col5.webp", colName: "The Winter Shop" },
  ];
  return (
    <>
      <h1 className="m-5 text-center text-2xl italic">Browse Collections</h1>
      <div className="flex h-full w-full overflow-x-scroll p-2">
        {collections.map((c) => CollectionCard(c.imgSource, c.colName))}
      </div>
    </>
  );
}

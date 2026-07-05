import React from "react";
import Image from "next/image";
import {
  CollectionProps,
  FeaturedCollectionsProps,
} from "../types/collections";

function CollectionCard({ id, imgSource, colName }: CollectionProps) {
  return (
    <div className="bg-[#202020] rounded-xl p-2 m-2">
      <Image src={imgSource} width={280} height={280} alt={colName}></Image>
      <h3 className="text-white text-center mt-2">{colName}</h3>
    </div>
  );
}

export default function FeaturedCollections({
  collections,
}: FeaturedCollectionsProps) {
  return (
    <>
      <h1 className="m-5 text-center text-2xl italic">Browse Collections</h1>
      <div className="flex h-full w-full overflow-x-scroll p-2">
        {collections.map((c) => (
          <CollectionCard
            key={c.id}
            imgSource={c.imgSource}
            colName={c.colName}
            id={c.id}
          />
        ))}
      </div>
    </>
  );
}

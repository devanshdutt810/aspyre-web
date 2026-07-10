"use client";

import React from "react";
import Image from "next/image";

function handleShopNow() {
  console.log("Navigating To Products..");
}

export default function Hero() {
  const logoUrl: string = "/Final_Transparent.webp";
  return (
    <div className="bg-[#A3B087] flex flex-col items-center">
      <Image
        className="p-5"
        src={logoUrl}
        width={600}
        height={600}
        alt="Aspyre Logo"
      />
      <button
        onClick={handleShopNow}
        className="p-2 m-5 bg-[#202020] rounded-xl text-white cursor-pointer"
      >
        Shop Now
      </button>
    </div>
  );
}

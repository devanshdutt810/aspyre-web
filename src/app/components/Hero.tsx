import React from "react";
import Image from "next/image";

export default function Hero() {
  const logoUrl: string = "/Final_Transparent.webp";
  return (
    <div className="bg-[#A3B087] flex justify-center">
      <Image
        className="p-5"
        src={logoUrl}
        width={600}
        height={600}
        alt="Aspyre Logo"
      />
    </div>
  );
}

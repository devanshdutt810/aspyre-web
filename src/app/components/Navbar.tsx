import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div id="NavBar" className="bg-[#A3B087] flex justify-center gap-10 p-5">
      <Image
        src="/icon/search-interface-symbol.png"
        width={24}
        height={24}
        alt="Aspyre Logo"
      ></Image>
      <h3>Home</h3>
      <h3>Aspyre Bestsellers</h3>
      <h3>All Collections</h3>
      <h3>Contact</h3>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [IsOpen, SetIsOpen] = useState(false);
  const NavBarClasses = `bg-[#EEECE1] w-fit flex flex-col justify-center gap-5 p-5 rounded-xl absolute border-1 ${!IsOpen ? "hidden" : ""}`;
  const MenuIcon = `${IsOpen ? "/icon/menuOpen.png" : "/icon/menuClose.png"}`;

  function handleMenuShow() {
    SetIsOpen(!IsOpen);
  }

  return (
    <div className="p-5 bg-[#A3B087] relative">
      <button>
        <Image
          src={MenuIcon}
          width={24}
          height={24}
          alt="Aspyre Logo"
          onClick={handleMenuShow}
        ></Image>
      </button>
      <div id="NavBar" className={NavBarClasses}>
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
    </div>
  );
}

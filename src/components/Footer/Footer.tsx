import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-5 flex flex-col items-center">
      <h1 className="m-5 text-center text-2xl italic">Join the Community</h1>
      <div className="flex rounded-xl w-fit bg-stone-300 p-4 gap-5">
        <input
          className="w-100 focus:outline-none focus:ring-0"
          name="myInput"
          placeholder="Enter Email to Join Our Community"
        />
        <button className="w-20 h-10 bg-black rounded-xl text-white">
          Join
        </button>
      </div>
      <h1 className="w-2/4 m-10 m-5 text-center text-2xl italic">
        We create elevated western wear for women who lead with confidence.
        Defined by clean silhouettes, premium craftsmanship, and effortless
        elegance, Aspyre is designed to inspire presence in every moment.
      </h1>
      <Image
        className="p-5"
        src="/Final_Transparent.webp"
        width={600}
        height={600}
        alt="Aspyre Logo"
      />
    </div>
  );
}

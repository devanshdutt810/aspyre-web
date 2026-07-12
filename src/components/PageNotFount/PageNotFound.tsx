import React from "react";
import BackButton from "../BackButton/BackButton";
import Image from "next/image";

export default function PageNotFound() {
  return (
    <div>
      <BackButton />
      <div className="flex justify-center">
        <Image
          src="/utilities/404.png"
          width={400}
          height={400}
          alt="PageNotFound"
        />
      </div>
    </div>
  );
}

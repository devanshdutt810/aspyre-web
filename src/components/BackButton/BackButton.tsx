"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="p-2 m-5 bg-[#202020] rounded-xl text-white cursor-pointer"
      onClick={() => router.back()}
    >
      ⬅Back
    </button>
  );
}

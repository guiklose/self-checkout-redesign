"use client";

import Image from "next/image";

import CartList from "@/app/components/Buy/CartList";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import ReturnButton from "@/app/components/ReturnButton";

export default function PlaceItemOnScaleScreen() {
  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />

      <div
      className="flex justify-around">
        <CartList />
        <div className="flex flex-col justify-evenly">
          <p className="text-black">Coloque o produto na balança.</p>

          <Image
            src="/scale.webp"
            alt="Scale"
            width={250}
            height={250}
          />
        </div>
      </div>


      <div className="flex justify-end">
        <ReturnButton route="/buy" />
      </div>

      <Footer />
    </div>
  );
}
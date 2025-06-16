"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CartList from "@/app/components/Buy/CartList";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import Image from "next/image";

type Product = {
  name: string;
  price: number;
  code: string;
};

export default function PlaceItemOnScaleScreen() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) setProducts(JSON.parse(savedProducts));
  }, []);

  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />

      <div
      className="flex justify-around">
        <CartList products={products} />
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
        <button
          onClick={() => router.push("/buy")}
          className="bg-green-700 hover:bg-green-800 cursor-pointer text-white font-bold px-6 py-3 rounded flex items-center gap-2"
        >
          ⬅️ Voltar
        </button>
      </div>

      <Footer />
    </div>
  );
}
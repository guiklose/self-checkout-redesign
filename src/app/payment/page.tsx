"use client";

import { useEffect, useState } from "react";

import CartList from "@/app/components/Buy/CartList";
import PaymentHeader from "@/app/components/Payment/PaymentHeader";
import PaymentMethods from "@/app/components/Payment/PaymentMethods";
import ReturnButton from "@/app/components/ReturnButton";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";

type Product = {
  name: string;
  price: number;
  code: string;
};

export default function PaymentPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    const savedTotal = localStorage.getItem("total");

    if (savedProducts) setProducts(JSON.parse(savedProducts));
    if (savedTotal) setTotal(Number(savedTotal));
  }, []);

  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />
      {/* Main Section */}
      <div className="flex justify-evenly items-start py-10 px-10">
        <CartList products={products} />

        <div className="w-[45%] space-y-8">
          <PaymentHeader total={total}/>
          <PaymentMethods total={total} setTotal={setTotal}/>
          <div className="flex justify-end">
            <ReturnButton route="/payment/extras" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
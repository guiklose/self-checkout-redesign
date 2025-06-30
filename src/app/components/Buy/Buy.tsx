"use client";
import { useState } from "react";

import Image from "next/image";
import CartList from "@/app/components/Buy/CartList";
import CartSummary from "@/app/components/Buy/CartSummary";
import BarcodeInput from "@/app/components/Buy/BarcodeInput";
import CartControls from "@/app/components/Buy/CartControls";
import { useCart } from "@/app/context/CartContext";

import { useRouter } from "next/navigation";

export default function BuyPage() {
  const router = useRouter();

  const { products, setProducts, total, setTotal } = useCart();

  const [error, setError] = useState('');

  const handleError = () => {
    setError('Item não encontrado');
    setTimeout(() => setError(''), 3000); // clears after 3s
  };

  const getProduct = async (code: number) => {
    try {
      const res = await fetch(`/api/product/${code}`);
      if (res.ok) {
        const product = await res.json();
        const newList = [...products, product];
        const newTotal = (Number(total) + product.price).toFixed(2);

        setProducts(newList);
        setTotal(newTotal);

        router.push("/buy/scale");
      } else {
        handleError();
      }
    } catch (err) {
      console.log("Erro: Aplicação não respondeu como Esperado.", err);

      router.push("/help");
    }
  };

  return (
    <div className="flex justify-evenly h-[450px]">
      <CartList />

      <div className="w-[35%] py-10">
        <CartSummary total={total} count={products.length} />
        <BarcodeInput onSubmit={getProduct} />
        <div className="mt-8 flex justify-center">
          <>
            {error && (
              <div className=" top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-out">
                {error}
              </div>
            )}

            {!error && (
              <Image src="/cod.png" alt="Product Code" width={160} height={160} />
            )}
          </>
        </div>
        <CartControls canProceed={products.length > 0} />
      </div>
    </div>
  );
}
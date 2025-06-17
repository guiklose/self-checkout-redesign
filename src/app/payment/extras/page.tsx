"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import ReturnButton from "@/app/components/ReturnButton";

export default function PaymentScreen() {
  const router = useRouter();

  const [wantBags, setWantBags] = useState(true);
  const [hasApp, setHasApp] = useState(true);

  const [, setProducts] = useState<{ name: string; price: number }[]>([]);
  const [, setTotal] = useState(0);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    const savedTotal = localStorage.getItem("total");

    if (savedProducts) setProducts(JSON.parse(savedProducts));
    if (savedTotal) setTotal(Number(savedTotal));
  }, []);

  const handleSubmit = () => {
    // Handle form submission logic here
    localStorage.setItem("wantBags", String(wantBags))
    localStorage.setItem("hasApp", String(hasApp))

    router.push("/payment");
  };

  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Bem Vindo ao Pagamento
      </h1>

      <div className="space-y-8">
        <div>
          <p className="text-lg text-gray-700 text-center mb-6">
            Você quer Comprar Sacolas Renováveis ?
          </p>

          <div className="flex justify-center space-x-8">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="bags"
                  checked={wantBags}
                  onChange={() => setWantBags(true)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 border-2 rounded ${
                  wantBags
                    ? "bg-orange-600 border-orange-600"
                    : "bg-white border-gray-400"
                }`}>
                  {wantBags && (
                    <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="ml-3 text-gray-700">Sim</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="bags"
                  checked={!wantBags}
                  onChange={() => setWantBags(false)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 border-2 rounded ${
                  !wantBags
                    ? "bg-orange-600 border-orange-600"
                    : "bg-white border-gray-400"
                }`}>
                  {!wantBags && (
                    <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="ml-3 text-gray-700">Não</span>
            </label>
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-700 text-center mb-6">
            Possui o aplicativo atacadão ?
          </p>

          <div className="flex justify-center space-x-8">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="app"
                  checked={hasApp}
                  onChange={() => setHasApp(true)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 border-2 rounded ${
                  hasApp
                    ? "bg-orange-600 border-orange-600"
                    : "bg-white border-gray-400"
                }`}>
                  {hasApp && (
                    <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="ml-3 text-gray-700">Sim</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="radio"
                  name="app"
                  checked={!hasApp}
                  onChange={() => setHasApp(false)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 border-2 rounded ${
                  !hasApp
                    ? "bg-orange-600 border-orange-600"
                    : "bg-white border-gray-400"
                }`}>
                  {!hasApp && (
                    <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="ml-3 text-gray-700">Não</span>
            </label>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col space-y-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Prosseguir para pagamento
        </button>

        <ReturnButton route="/buy" />
      </div>
      <Footer />
    </div>
  );
}
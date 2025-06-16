"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";

export default function SuccessPage() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    if (seconds === 0) {
      router.push("/");
    }

    return () => clearInterval(interval);
  }, [seconds, router]);

  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />

      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-8">
          Compra <br /> Finalizada
        </h1>

        <div className="w-24 h-24 bg-green-800 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="mt-6 text-lg font-semibold text-gray-700">
          Retornando automaticamente em {seconds}...
        </p>
      </div>

      <Footer />
    </div>
  );
}

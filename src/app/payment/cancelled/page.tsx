"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";

export default function PagamentoCancelado() {
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
        <main className="flex-grow flex flex-col justify-center items-center">
          <h2 className="font-bold text-black text-[22px] mb-7">Pagamento Cancelado</h2>
          <div className="text-[80px] text-red-900 font-extrabold leading-none">!</div>
        </main>

        <p className="mt-6 text-lg font-semibold text-gray-700">
          Retornando automaticamente em {seconds}...
        </p>
      </div>

      <Footer />

    </div>
  );
}

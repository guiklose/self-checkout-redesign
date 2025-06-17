"use client";

import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import ReturnButton from "@/app/components/ReturnButton";

export default function HelpCalledScreen() {
  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />

      <div className="text-center">
        <h1 className="text-3xl font-bold text-black mb-8 leading-snug">
          Atendente a Caminho<br />
          Aguarde!
        </h1>

        <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </div>
      </div>

      <ReturnButton route="back" />

      <Footer />
    </div>
  );
}
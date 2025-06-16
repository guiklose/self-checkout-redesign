"use client";

import Buy from "@/app/components/Buy/Buy";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />
      <Buy />
      <Footer />
    </div>
  )
}
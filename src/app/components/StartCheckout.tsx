import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";

const StartCheckout = () => {
  const router = useRouter();

  // remove old stored cart when component mounts (client-side only)
  useEffect(() => {
    localStorage.removeItem("products");
    localStorage.removeItem("total");
  }, []);

  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />

      <button
        onClick={() => router.push("/buy")}
        className="bg-orange-500 text-black font-mono px-10 py-5 rounded-full text-lg shadow-lg hover:bg-orange-600 transition duration-200 cursor-pointer"
      >
        Toque aqui para iniciar às compras
      </button>

      <Footer />
    </div>
  );
};

export default StartCheckout;
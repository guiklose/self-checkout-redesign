"use client";
import CartList from "@/app/components/Buy/CartList";
import PaymentHeader from "@/app/components/Payment/PaymentHeader";
import PaymentMethods from "@/app/components/Payment/PaymentMethods";
import ReturnButton from "@/app/components/ReturnButton";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";

export default function PaymentPage() {
  const { total, setTotal, hydrated } = useCart();

  if (!hydrated) return <div className="text-black">Carregando...</div>;

  return (
    <div className="flex flex-col justify-between text-left min-h-screen bg-white shadow-lg w-full p-[20px]">
      <Banner />
      {/* Main Section */}
      <div className="flex justify-evenly items-start py-10 px-10">
        <CartList />

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
"use client";
import { useEffect } from "react";

import StartCheckout from "@/app/components/StartCheckout";
import { useCart } from "@/app/context/CartContext";

export default function Home() {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, [resetCart]);

  return (
    <main>
      <StartCheckout />
    </main>
  )
}
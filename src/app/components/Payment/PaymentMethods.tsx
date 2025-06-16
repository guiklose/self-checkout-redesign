"use client";

import { useState } from "react";
import PaymentPopup from "@/app/components/Payment/PaymentPopup"; // ajuste o caminho conforme seu projeto
import { Dispatch, SetStateAction } from "react";

const PaymentScreen = ({
  total,
  setTotal,
}: {
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePaymentClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center">
      {["Cartão de Crédito", "Cartão Débito", "PIX", "Vale Alimentação"].map((text, i) => (
        <button
          key={i}
          className="w-[80%] h-[60px] bg-orange-400 hover:bg-orange-500 text-white font-bold rounded shadow cursor-pointer flex items-center justify-center"
          onClick={handlePaymentClick}
        >
          {text}
        </button>
      ))}

      {/* Modal */}
      {showPopup &&
        <PaymentPopup
          total={total}
          setTotal={setTotal}
          onClose={() => setShowPopup(false)}
        />
      }
    </div>
  );
};

export default PaymentScreen;
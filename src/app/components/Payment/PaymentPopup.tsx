"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function PaymentPopup({
  total,
  setTotal,
  onClose,
}: {
  total: number;
  setTotal: (value: number) => void;
  onClose: () => void;
}) {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [step, setStep] = useState<"input" | "waiting" | "error">("input");

  const hasApp = localStorage.getItem("hasApp");

  const handlePress = (digit: string) => {
    if (input.length >= 9) return;
    setInput(input + digit);
  };

  const handlePay = () => {
    const paid = Number(input) / 100;

    if (!paid) return;

    if (paid > total) {
      // Show next step
      setStep("error");
    } else {
      const newTotal = (total - paid).toFixed(2);

      localStorage.setItem("total", String(newTotal));
      setTotal(Number(newTotal));

      // Show next step
      setStep("waiting");
    }
  };

  const finishPayment = () => {
    if ((!total) || ((hasApp === "true") && (total <= 1))) {
      // Zera localStorage e vai pra rota de sucesso
      localStorage.removeItem("products");
      localStorage.removeItem("total");
      router.push("/payment/success");
    }

    onClose();
  }

  const display = () => {
    const cents = input.padStart(3, "0");
    const reais = cents.slice(0, -2);
    const centavos = cents.slice(-2);
    return `${reais},${centavos}`;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white w-[600px] p-8 rounded-lg border-4 border-orange-600 shadow-xl">
      {step === "input" ? (
        <>
          <h2 className="text-center text-black text-xl font-bold mb-4">
            Valor Total, à pagar: R$ {hasApp ? (total - 1).toFixed(2) : total.toFixed(2)}
          </h2>
          <p className="text-center text-black mb-6 font-semibold">
            Digite o valor que deseja pagar, nesse momento
          </p>
          <div className="text-2xl text-center font-bold text-green-700 mb-4">
            R$ {display()}
          </div>

          <div className="mb-6">
            {[[1, 2, 3], [4, 5, 6], [7, 8, 9]].map((row, i) => (
              <div key={i} className="flex p-1 justify-center">
                {row.map((num) => (
                  <button
                    key={num}
                    onClick={() => handlePress(num.toString())}
                    className="w-16 h-16 border-2 m-2 border-orange-500 hover:bg-orange-600 cursor-pointer text-xl font-bold text-black rounded-md"
                  >
                    {num}
                  </button>
                ))}
              </div>
            ))}
            <div className="flex justify-center">
              <button
                onClick={() => handlePress("0")}
                className="w-16 h-16 border-2 border-orange-500 hover:bg-orange-600 cursor-pointer text-black font-bold text-xl rounded-md"
              >
                0
              </button>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <button
              className="w-full py-2 bg-green-700 hover:bg-green-900 text-white font-bold rounded cursor-pointer"
              onClick={handlePay}
            >
              Pagar
            </button>

            <button
              className="w-full py-2 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded cursor-pointer"
              onClick={onClose}
            >
              Voltar
            </button>

            <button
              className="w-full py-2 bg-red-600 hover:bg-red-900 text-white font-bold rounded cursor-pointer"
              onClick={() => router.push("payment/cancelled")}
            >
              Cancelar
            </button>
          </div>
        </>
      ) : (step === "waiting") ? (
        <>
          <h2 className="text-xl font-bold mb-6 text-black">
            Siga as Instruções da Maquineta para a finalização do Pagamento
          </h2>

          <div className="flex justify-center mb-6 text-orange-500 text-5xl">
            <span>💳</span>
          </div>

          <button
            className="bg-green-700 cursor-pointer hover:bg-green-800 text-white font-bold py-2 px-6 rounded flex items-center justify-center gap-2 mx-auto"
            onClick={finishPayment}
          >
            <p className="text-white">Finalizar Pagamento</p>
          </button>
        </>
      ) : (
        <>
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Erro no Pagamento</h1>

            <p className="text-gray-600 mb-8">
              &lt; Foi digitado um valor acima do total da compra &gt;
            </p>

            <div className="space-y-3">
              <button
                className="bg-orange-500 text-white text-lg cursor-pointer font-semibold px-6 py-2 rounded-md shadow hover:bg-orange-600 transition"
                onClick={() => router.push("/help")}
              >
                Chamar Atendente
              </button>

              <button
                className="bg-orange-400 cursor-pointer hover:bg-bg-orange-500 text-white font-bold py-2 px-6 rounded flex items-center justify-center gap-2 mx-auto"
                onClick={finishPayment}
              >
                <Image
                  src="/return.png"
                  alt="Return"
                  width={20}
                  height={20}
                /> <p className="text-black">Voltar</p>
              </button>
            </div>
          </div>
        </>
      )}
      </div>
    </div>
  );
}
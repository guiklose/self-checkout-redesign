"use client";

import { useState } from "react";

export default function BarcodeInput({
  onSubmit,
}: {
  onSubmit: (code: number) => void;
}) {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      <p className="mt-4 text-black font-bold">
        Passe seu produto no scanner ou digite o código de barras
      </p>

      {!showInput && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowInput(true)}
            className="bg-yellow-400 text-black font-bold mt-6 px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition cursor-pointer"
          >
            Digitar Código de Barras
          </button>
        </div>
      )}

      {showInput && (
        <div className="mt-4 flex flex-col items-center">
          <input
            type="number"
            placeholder="Digite o código (ex: 1234)"
            className="border border-gray-400 p-2 rounded text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => {
                onSubmit(Number(input));
                setShowInput(false);
                setInput("");
              }}
              className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Confirmar
            </button>
            <button
              onClick={() => {
                setShowInput(false);
                setInput("");
              }}
              className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

export default function CartSummary({ total, count }: { total: number; count: number }) {
  return (
    <>
      <p className="text-black">Total da Compra: R$ {total}</p>
      <p className="text-black">Quantidade de Itens Vendidos: {count}</p>
    </>
  );
}
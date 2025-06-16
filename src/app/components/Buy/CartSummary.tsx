"use client";

export default function CartSummary({ total, count }: { total: number; count: number }) {
  return (
    <>
      <p className="text-black text-center">Total da Compra: R$ {total}</p>
      <p className="text-black text-center">Quantidade de Itens Vendidos: {count}</p>
    </>
  );
}
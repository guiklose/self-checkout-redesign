"use client";
import React from "react";

type Product = { name: string; price: number };

export default function CartList({ products }: { products: Product[] }) {
  return (
    <div className="w-[35%]">
      <h2 className="text-black font-bold">Lista de Compra</h2>
      <div className="border border-black w-full h-[400px] p-4">
        <ul>
        {products.reduce((acc, p) => {
          const existing = acc.find(item => item.code === p.code);
          if (existing) {
            existing.quantity += 1;
            existing.totalPrice += p.price;
          } else {
            acc.push({ ...p, quantity: 1, totalPrice: p.price });
          }
          return acc;
        }, []).map((p, i) => (
          <li className="text-black" key={i}>
            {p.name} - R$ {p.totalPrice.toFixed(2)} {p.quantity > 1 && `- ${p.quantity} Unidades`}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

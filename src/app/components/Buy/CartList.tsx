"use client";
import React from "react";

type Product = {
  name: string;
  price: number;
  code: string;
  weight: number;
};

type CartItem = Product & {
  quantity: number;
  totalPrice: number;
  totalWeight: number;
};

export default function CartList({ products }: { products: Product[] }) {
  return (
    <div className="w-[35%]">
      <h2 className="text-black font-bold">Lista de Compra</h2>
      <div className="border border-black w-full h-[400px] p-4 overflow-y-auto">
        <ul>
        {products.reduce((acc, p) => {
          const existing = acc.find(item => item.code === p.code);
          if (existing) {
            existing.quantity += 1;
            existing.totalPrice += p.price;
            existing.totalWeight += p.weight;
          } else {
            acc.push({ ...p, quantity: 1, totalPrice: p.price, totalWeight: p.weight });
          }
          return acc;
        }, [] as CartItem[]).map((p, i) => (
          <li className="text-black my-1 p-1 rounded border border-amber-600" key={i}>
            <div className="flex justify-between py-0.5">
              <p className="font-bold">{p.name}</p>
              <p>R$ {p.totalPrice.toFixed(2)}</p>
            </div>
            <div>
              {p.quantity && `${p.quantity} Unidades x ${p.totalWeight}g`}
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
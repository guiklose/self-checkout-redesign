"use client";
import React from "react";

import { useCart } from "@/app/context/CartContext";

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

export default function CartList() {
  const { products, setProducts, total, setTotal } = useCart();

  const handleIncrement = (product: Product) => {
    setProducts([...products, product]);
    setTotal((Number(total) + product.price));
  };

  const handleDecrement = (product: Product) => {
    const index = products.findIndex(p => p.code === product.code);
    if (index !== -1) {
      const updated = [...products];
      updated.splice(index, 1);
      setProducts(updated);
      setTotal(Math.max(0, total - product.price));
    }
  };

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
        }, [] as CartItem[]).map((product, i) => (
          <li className="text-black my-1 p-1 rounded border border-amber-600" key={i}>
            <div className="flex justify-between py-0.5">
              <p className="font-bold">{product.name}</p>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement(product)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  –
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={() => handleIncrement(product)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <p>R$ {product.totalPrice.toFixed(2)}</p>
            </div>
            <div>
              {product.quantity && `${product.quantity} Unidades x ${product.totalWeight}g`}
            </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
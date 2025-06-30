"use client";
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

// Define your product type
export type Product = {
  name: string;
  price: number;
  code: string;
  weight: number;
};

// Define the shape of the cart context
type CartContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  hydrated: boolean;
  resetCart: () => void;
};

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    const savedTotal = localStorage.getItem("total");

    if (savedProducts) setProducts(JSON.parse(savedProducts));
    if (savedTotal) setTotal(Number(savedTotal));

    setHydrated(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("products", JSON.stringify(products));
      localStorage.setItem("total", String(total));
    }
  }, [products, total, hydrated]);

  const resetCart = useCallback(() => {
    setProducts([]);
    setTotal(0);
    localStorage.removeItem("products");
    localStorage.removeItem("total");
  }, []);

  return (
<CartContext.Provider value={{ products, setProducts, total, setTotal, hydrated, resetCart }}>
{children}
    </CartContext.Provider>
  );
};

// Hook to use the context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

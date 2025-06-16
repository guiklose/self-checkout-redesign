"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setDate(formatted);
  }, []);

  return (
    <footer className="text-black flex justify-between text-sm border-t border-gray-300 px-4 py-2 text-right">
      <p>Atacadão</p>
      <p>{date}</p>
    </footer>
  );
}

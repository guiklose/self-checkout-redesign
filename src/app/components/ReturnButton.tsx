"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ReturnButton({ route, text }: { route: string, text?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => route !== "back" ? router.push(route) : router.back()}
      className="bg-orange-400 justify-center hover:bg-orange-500 cursor-pointer text-white font-bold px-6 py-3 rounded flex items-center gap-2"
    >
      <Image
        src="/return.png"
        alt="Return"
        width={20}
        height={20}
      /> <p className="text-black">{text ? text : 'Voltar'}</p>
    </button>
  );
}

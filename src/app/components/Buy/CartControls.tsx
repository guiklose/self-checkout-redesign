"use client";
import { useRouter } from "next/navigation";

import ReturnButton from "@/app/components/ReturnButton";

export default function CartControls({ canProceed }: { canProceed: boolean }) {
  const router = useRouter();

  return (
    <div className="mt-8 flex justify-end gap-8">
      {canProceed && (
        <button
          className="flex cursor-pointer items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-md"
          onClick={() => router.push("/payment/extras")}
        >
          Prosseguir com a compra
        </button>
      )}
      <ReturnButton route="/" />
    </div>
  );
}

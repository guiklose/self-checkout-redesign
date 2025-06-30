import { useEffect, useState } from "react";

export default function PaymentHeader({ total }: { total: number }) {
  const [hasApp, setHasApp] = useState(false);

  useEffect(() => {
    const hasApp = (localStorage.getItem("hasApp") === "true") ? true : false;

    setHasApp(hasApp);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black text-center">Bem Vindo ao Pagamento</h1>
      <p className="text-black text-center mt-2 text-lg font-semibold">
        Valor Total: R$ {Number(total).toFixed(2)}
      </p>
      <>
        {hasApp && (
          <p className="text-orange-500 text-center mt-2 text-lg font-semibold">
            Valor Total, com Desconto do Clube: R$ {Number(total - 1).toFixed(2)}
          </p>
        )}
      </>
      <p className="text-center mt-4 text-black">
        Selecione a forma de pagamento e prossiga para digitar o valor que deseja pagar
      </p>
    </div>
  );
}

export default function PaymentHeader({ total }: { total: number }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black text-center">Bem Vindo ao Pagamento</h1>
      <p className="text-black text-center mt-2 text-lg font-semibold">
        Valor Total, à pagar: R$ {total.toFixed(2)}
      </p>
      <p className="text-center mt-4 text-black">
        Selecione a forma de pagamento e prossiga para digitar o valor que deseja pagar
      </p>
    </div>
  );
}

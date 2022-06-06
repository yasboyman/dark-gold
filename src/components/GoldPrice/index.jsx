export const GoldPrice = ({ price, currency, price_18k }) => {
  return (
    <div>
      <p aria-label={"currency_price"}>
        <span>{currency}</span>18K{price_18k}
      </p>
    </div>
  );
};

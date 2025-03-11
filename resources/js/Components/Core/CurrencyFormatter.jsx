const CurrencyFormatter = ({ amount, currency = "USD", locale }) => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
};
export default CurrencyFormatter;

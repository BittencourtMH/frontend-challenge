function formatCurrency(object) {
  return formatCurrencyWithAmount({...object, amount: 1});
}

function formatCurrencyWithAmount(object) {
  const {amount, currency, value} = object;
  if (!amount) {
    return '-';
  }
  if (!currency) {
    return 'Diversas moedas';
  }
  return new Intl.NumberFormat('pt', {style: 'currency', currency: currency}).format(value);
}

export {formatCurrency, formatCurrencyWithAmount};

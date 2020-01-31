function formatCurrency(object, translation) {
  return formatCurrencyWithAmount({...object, amount: 1}, translation);
}

function formatCurrencyWithAmount(object, translation) {
  const {amount, currency, value} = object;
  if (!amount) {
    return '-';
  }
  if (!currency) {
    return translation.currency.multiple;
  }
  return new Intl.NumberFormat('pt', {style: 'currency', currency: currency}).format(value);
}

export {formatCurrency, formatCurrencyWithAmount};

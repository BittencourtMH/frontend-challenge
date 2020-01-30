function formatValue(object) {
  return formatValueWithAmount({...object, amount: 1});
}

function formatValueWithAmount(object) {
  const {amount, currency, value} = object;
  if (!amount) {
    return '-';
  }
  if (!currency) {
    return 'Diversas moedas';
  }
  return `${currency} ${value}`;
}

export {formatValue, formatValueWithAmount};

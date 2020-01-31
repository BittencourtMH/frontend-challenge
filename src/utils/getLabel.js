function getLabel(translation, amount) {
  return amount < 2 ? translation.singular : translation.plural;
}

export default getLabel;

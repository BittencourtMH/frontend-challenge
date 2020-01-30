function differenceDays(initial, final) {
  if (!(initial instanceof Date)) {
    initial = new Date(initial);
  }
  if (!(final instanceof Date)) {
    final = new Date(final);
  }
  const initialNormal = new Date(initial.getFullYear(), initial.getMonth(), initial.getDate());
  const finalNormal = new Date(final.getFullYear(), final.getMonth(), final.getDate());
  return (finalNormal - initialNormal) / (1000 * 60 * 60 * 24);
}

export default differenceDays;

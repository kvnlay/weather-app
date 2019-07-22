const converter = (unit, value) => {
  if (unit === 'C') return Math.round(((value - 32) * 5) / 9);
  if (unit === 'F') return Math.round((value * 9) / 5 + 32);
  return value;
};

export {
  converter
};
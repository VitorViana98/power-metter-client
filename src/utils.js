
export const formatPrice = (num) => {
  const price = num.toFixed(2).replace('.', ',');
  return `$ ${price}`;
};

export const limitString = (string, size) => {
  if (!string) return;
  if (string.length > size) {
    return string.substring(0, size - 3) + '...';
  }
  return string;
};

export const matchRoute = (urlTested, matcher) => {
  const urlSplitted = urlTested.split('/');
  const matchSplitted = matcher.split('/');
  return urlSplitted[1] === matchSplitted[1];
};

export const rgbShades = (color: string) => {
  const numbersOnly = color.substring(4, color.length - 1);
  const rgbArray = numbersOnly.split(', ');

  const result = [];
  for (let i = 9; i >= 0; i--) {
    result.push(
      `rgb(${(+rgbArray[0] / 10 * i)
        .toFixed()},${(+rgbArray[1] / 10 * i)
        .toFixed()},${(+rgbArray[2] / 10 * i)
        .toFixed()})`
    );
  }
  return result;
};

export const rgbTints = (color: string) => {
  const numbersOnly = color.substring(4, color.length - 1);
  const rgbArray = numbersOnly.split(', ');

  const result = [];
  if (color) {
    for (let i = 10; i > 0; i--) {
      result.push(
        `rgb(${(+rgbArray[0] + (255 - +rgbArray[0]) / 10 * i)
          .toFixed()},${(+rgbArray[1] + (255 - +rgbArray[1]) / 10 * i)
          .toFixed()},${(+rgbArray[2] + (255 - +rgbArray[2]) / 10 * i)
          .toFixed()})`
      );
    }
  }
  return result;
};

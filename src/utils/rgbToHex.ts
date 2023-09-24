export const rgbToHex = (rgbString: string) => {
  // @ts-ignore
  const [r, g, b] = rgbString.match(/\d+/g).map(Number);
  return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
};

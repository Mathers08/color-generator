export const hexToRgb = (hex: string) => {
  let normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) {
    normal.slice(1);
    return `rgb(${parseInt(normal[1], 16)}, ${parseInt(normal[2], 16)}, ${parseInt(normal[3], 16)})`;
  }

  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shorthand) {
    shorthand.slice(1);
    return `rgb(${parseInt(shorthand[1] + shorthand[1], 16)}, ${parseInt(shorthand[2] + shorthand[2], 16)}, ${parseInt(shorthand[3] + shorthand[3], 16)})`;
  }

  return '';
};

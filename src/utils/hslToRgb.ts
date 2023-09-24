export const hslToRgb = (hsl: string) => {
  hsl = hsl.trim().toLowerCase();
  const regex = /^hsl\((\d+) \s*(\d+%)\s* \s*(\d+%)\)$/;
  const match = regex.exec(hsl);
  let r, g, b;

  if (match) {
    const hue = parseInt(match[1]);
    const saturation = parseInt(match[2]);
    const lightness = parseInt(match[3]);

    const c = (1 - Math.abs(2 * (lightness / 100) - 1)) * (saturation / 100);
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = (lightness / 100) - c / 2;

    if (0 <= hue && hue < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= hue && hue < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= hue && hue < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= hue && hue < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= hue && hue < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

  }
  return `rgb(${r}, ${g}, ${b})`;
};

export const checkColorType = (colorTitle: string) => {
  if (colorTitle.startsWith('rgb')) {
    return 'rgb';
  } else if (colorTitle.startsWith('hsl')) {
    return 'hsl';
  } else if (colorTitle.startsWith('#')) {
    return 'hex';
  } else {
    return 'common';
  }
};

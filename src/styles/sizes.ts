import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SIZES = {
  radius: 30,
  padding: 10,
  minpadding: 5,
  h2: 22,
  h4: 18,
  body1: 30,
  body5: 12,
  fontSize10: 10,
  fontSize11: 11,
  fontSize12: 12,
  fontSize13: 13,
  fontSize14: 14,
  fontSize15: 15,
  fontSize16: 16,
  fontSize17: 17,
  fontSize18: 18,
  fontSize20: 20,
  fontSize25: 25,
  fontSize30: 30,
  width,
  height,
};

export const FONTS = {
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h4: { fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontSize: SIZES.body1, lineHeight: 36 },
  body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { SIZES, FONTS };

export default appTheme;

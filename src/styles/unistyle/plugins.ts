import type { UnistylesPlugin } from 'react-native-unistyles';

export const fontFamilyPlugin: UnistylesPlugin = {
  name: 'fontFamilyPlugin',
  onParsedStyle: (key, styles) => {
    const modifiedStyles = { ...styles };
    if (
      'fontSize' in modifiedStyles ||
      'fontWeight' in modifiedStyles ||
      'textAlign' in modifiedStyles ||
      key.includes('text') ||
      key.includes('Text')
    ) {
      if (
        modifiedStyles.fontWeight === 'bold' ||
        modifiedStyles.fontWeight === '700' ||
        modifiedStyles.fontWeight === '800' ||
        modifiedStyles.fontWeight === '900'
      ) {
        delete modifiedStyles.fontWeight;
        modifiedStyles.fontFamily = 'Manrope-Bold';
      } else {
        modifiedStyles.fontFamily = 'Manrope-Regular';
      }
    }
    return modifiedStyles;
  },
};

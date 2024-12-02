import { basicStyles } from 'styles/basic.style';
import { useStyles } from 'react-native-unistyles';

export function useAppStyles(style: any = null) {
  const basic = useStyles(basicStyles);
  const custom = useStyles(style);
  type styleType = typeof custom.styles & typeof basic.styles;
  const mergedStyles: styleType = { ...basic.styles, ...custom.styles };
  return { ...custom, styles: mergedStyles };
}

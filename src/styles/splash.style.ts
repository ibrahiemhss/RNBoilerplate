import { createStyleSheet } from 'react-native-unistyles';
import { SIZES } from 'styles/sizes';

export const splashStyles = createStyleSheet((theme) => ({
  container: {
    height: SIZES.height,
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topSpace: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 600,
    height: 300,
    position: 'absolute',
    top: SIZES.height / 2 - 200,
    resizeMode: 'contain',
  },
  textBottom: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
}));

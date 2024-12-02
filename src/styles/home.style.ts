import { createStyleSheet } from 'react-native-unistyles';
import { SIZES } from 'styles/sizes';

export const homeStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  title: {
    color: theme.colors.white,
    fontSize: SIZES.fontSize20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 25,
  },
}));

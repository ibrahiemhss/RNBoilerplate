import { createStyleSheet } from 'react-native-unistyles';
import { SIZES } from 'styles/sizes';

export const homeHeaderStyle = createStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.backgroundColor,
    padding: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.darkGrey,
    borderWidth: 1,
  },
  greeting: {
    fontSize: SIZES.fontSize12,
    color: theme.colors.white,
    marginRight: 4,
    lineHeight: 16,
  },
  username: {
    fontSize: SIZES.fontSize12,
    color: theme.colors.white,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  userInfoDetails: {
    flexDirection: 'column',
  },
  notificationIcon: {
    padding: 8,
  },
}));

import { createStyleSheet } from 'react-native-unistyles';

export const bottomTabsStyles = createStyleSheet((theme) => ({
  customTabBar: {
    flexDirection: 'row',
    position: 'absolute',
    paddingHorizontal: 14,
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: theme.colors.bottomNav,
    elevation: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBarCustomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 2,
    marginTop: 4,
  },
  tabBarButtonIcon: {
    width: 'auto',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 6,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  tabBarSelectedBackground: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarButtonIconText: {
    color: theme.colors.white, // Text inside the red button should be white
    fontSize: 14,
    fontWeight: '600',
  },
  unselectedTabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  unselectedTabIconImage: {
    tintColor: theme.colors.gray, // Gray for unselected icons
    width: 24,
    height: 24,
  },
}));

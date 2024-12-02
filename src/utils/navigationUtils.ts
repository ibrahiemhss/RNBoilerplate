import * as NavigationService from 'services/navigationService';

export const navigateToTheApp = () => {
  NavigationService.replace('Home', { screen: 'HomeScreen' });
};
export const navigateTo = (routeName: string, params?: any) => {
  NavigationService.navigate(routeName, params);
};

export const replaceTo = (routeName: string, params?: any) => {
  NavigationService.replace(routeName, params);
};

export const onAppReady = () => {
  navigateToTheApp();
};

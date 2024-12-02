import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'services/navigationService';
import 'styles/unistyle/unistyles';
import AppWrapper from './AppWrapper';
import { onAppReady } from 'utils/navigationUtils';
import { UnistylesProvider } from 'react-native-unistyles';
import { Provider } from 'react-redux';
import store from 'store/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <UnistylesProvider>
          <NavigationContainer ref={navigationRef} onReady={onAppReady}>
            <AppWrapper />
          </NavigationContainer>
        </UnistylesProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

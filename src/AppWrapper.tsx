import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from 'navigation/AppNavigation';
import { StatusBar } from 'react-native';
import { useAppStyles } from 'hooks/useAppStyles';

const AppWrapper = () => {
  const { theme } = useAppStyles();
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor={theme.colors.backgroundColor} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigation />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default AppWrapper;

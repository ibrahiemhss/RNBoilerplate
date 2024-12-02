import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigationStackParamList } from 'types/navigation.types';
import Splash from 'screens/Splash';
import BottomTabs from 'navigation/BottomTabs';

const Stack = createNativeStackNavigator<MainNavigationStackParamList>();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

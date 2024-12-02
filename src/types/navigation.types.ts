import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface MainNavigationStackParamList extends ParamListBase {
  Splash: undefined;
  HomeScreen: undefined;
  Screen3: undefined;
  Screen4: undefined;
  OtherScreen: {
    dataId: string;
  };
}

export type DefaultNavigationProp<T extends keyof MainNavigationStackParamList> = {
  navigation: NativeStackNavigationProp<MainNavigationStackParamList, T>;
};

export type OtherScreenProps = {
  navigation: NativeStackNavigationProp<MainNavigationStackParamList, 'OtherScreen'>;
  route: RouteProp<MainNavigationStackParamList, 'OtherScreen'>;
};

import { ElementType, type FC, isValidElement, type ReactNode, useEffect, useState } from 'react';
import { View, Keyboard, type GestureResponderEvent, Text, Pressable } from 'react-native';
import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Svg from 'react-native-svg';
import { useAppStyles } from 'hooks/useAppStyles';
import { bottomTabsStyles } from 'styles/bottomTabs.style';
import HomeScreen from 'screens/HomeScreen';
import MenuScreen from 'screens/MenuScreen';
import Screen4 from 'screens/Screen4';
import Screen3 from 'screens/Screen3';
import HomeIcon from 'assets/svg/home.svg';
import MenuIcon from 'assets/svg/menu.svg';

const Tab = createBottomTabNavigator();

interface TabBarCustomButtonProps {
  accessibilityState?: {
    selected?: boolean;
  };
  children?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  tabIndex?: number;
}

const TabBarCustomButton: FC<TabBarCustomButtonProps> = ({
  onPress,
  accessibilityState,
  children,
  tabIndex,
}) => {
  const { styles } = useAppStyles(bottomTabsStyles);
  const isSelected = accessibilityState?.selected;

  const buttonLabel = () => {
    switch (tabIndex) {
      case 0:
        return 'Home';
      case 1:
        return 'Menu';
      case 2:
        return 'SCREEN 3';
      case 3:
        return 'SCREEN 4';
      default:
        return '';
    }
  };

  return (
    <Pressable
      style={isSelected ? styles.tabBarCustomButton : styles.unselectedTabIcon}
      onPress={onPress}>
      {isSelected ? (
        <View style={styles.tabBarButtonIcon}>
          {children}
          <Text style={styles.tabBarButtonIconText}>{buttonLabel()}</Text>
        </View>
      ) : (
        isValidElement(children) && (
          <Svg style={styles.unselectedTabIconImage} {...children.props} />
        )
      )}
    </Pressable>
  );
};

const CustomTabBar: FC<{ props: BottomTabBarProps }> = ({ props }) => {
  return <BottomTabBar {...props} />;
};

const TabBarComponent = (props: BottomTabBarProps) => <CustomTabBar props={props} />;
interface AnimatedTabBarIconProps {
  focused: boolean;
  Icon: ElementType;
}

const TabBarIcon: FC<AnimatedTabBarIconProps> = ({ Icon, focused }) => {
  const { theme } = useAppStyles();
  return (
    <View>
      <Icon width={24} height={24} fill={theme.colors.white} />
    </View>
  );
};
const TabBarButton = (props: TabBarCustomButtonProps) => {
  return <TabBarCustomButton {...props} />;
};
const HomeIconWrapper = ({ focused }: { focused: boolean }) => {
  return <TabBarIcon focused={focused} Icon={HomeIcon} />;
};

const DownloadIconWrapper = ({ focused }: { focused: boolean }) => {
  return <TabBarIcon focused={focused} Icon={HomeIcon} />;
};

const HeartIconWrapper = ({ focused }: { focused: boolean }) => {
  return <TabBarIcon focused={focused} Icon={HomeIcon} />;
};

const MenuIconWrapper = ({ focused }: { focused: boolean }) => {
  return <TabBarIcon focused={focused} Icon={MenuIcon} />;
};
const BottomTabs: FC = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const { styles, theme } = useAppStyles(bottomTabsStyles);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardVisible(false),
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: { alignItems: 'center', marginTop: 20 },
        tabBarStyle: [styles.customTabBar, { display: keyboardVisible ? 'none' : 'flex' }],
      }}
      tabBar={TabBarComponent}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIconWrapper,
          tabBarButton: (props) => <TabBarCustomButton {...props} tabIndex={0} />,
        }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: MenuIconWrapper,
          tabBarButton: (props) => <TabBarCustomButton {...props} tabIndex={1} />,
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarIcon: HeartIconWrapper,
          tabBarButton: (props) => <TabBarCustomButton {...props} tabIndex={2} />,
        }}
      />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{
          tabBarIcon: DownloadIconWrapper,
          tabBarButton: (props) => <TabBarCustomButton {...props} tabIndex={3} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

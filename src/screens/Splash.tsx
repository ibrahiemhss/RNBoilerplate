import { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppStyles } from 'hooks/useAppStyles';
import { splashStyles } from 'styles/splash.style';
import { appAssets } from 'appConstants/appAssets';
import { navigateToTheApp } from 'utils/navigationUtils';

const Splash = () => {
  const { styles } = useAppStyles(splashStyles);
  useEffect(() => {
    navigateToTheApp();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSpace} />
      <Image source={appAssets.logo} style={styles.logo} />
      <Text style={styles.textBottom}>Uxbert Radio</Text>
    </SafeAreaView>
  );
};

export default Splash;

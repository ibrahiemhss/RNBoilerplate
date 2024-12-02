import { type FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppStyles } from 'hooks/useAppStyles';
import PageScreensTopTitle from 'components/PageScreensTopTitle';
const MenuScreen: FC = () => {
  const { styles } = useAppStyles();
  return (
    <SafeAreaView style={styles.baseSafeAreaView}>
      <PageScreensTopTitle title={'MENU'} />
    </SafeAreaView>
  );
};

export default MenuScreen;

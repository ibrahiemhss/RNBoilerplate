import { type FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppStyles } from 'hooks/useAppStyles';
import PageScreensTopTitle from 'components/PageScreensTopTitle';
import { DefaultNavigationProp } from 'types/navigation.types';

const Screen4: FC<DefaultNavigationProp<'Screen4'>> = ({ navigation }) => {
  const { styles } = useAppStyles();

  return (
    <SafeAreaView style={styles.baseSafeAreaView}>
      <PageScreensTopTitle title={'Screen4'} />
    </SafeAreaView>
  );
};
export default Screen4;

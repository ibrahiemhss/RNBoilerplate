import { type FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppStyles } from 'hooks/useAppStyles';
import PageScreensTopTitle from 'components/PageScreensTopTitle';
import { DefaultNavigationProp } from 'types/navigation.types';

const Screen3: FC<DefaultNavigationProp<'Screen3'>> = ({ navigation }) => {
  const { styles } = useAppStyles();

  return (
    <SafeAreaView style={styles.baseSafeAreaView}>
      <PageScreensTopTitle title={'Screen 3'} />
    </SafeAreaView>
  );
};

export default Screen3;

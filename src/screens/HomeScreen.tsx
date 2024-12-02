import { type FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppStyles } from 'hooks/useAppStyles';
import { homeStyles } from 'styles/home.style';

import HomeHeader from 'components/HomeHeader';
import { DefaultNavigationProp } from 'types/navigation.types';
import { useAppDispatch, useTypedSelector } from 'hooks/reduxHooks';
import { getAlldataAction } from 'store/slices/mainData.slice';
import PageScreensTopTitle from 'components/PageScreensTopTitle';

const HomeScreen: FC<DefaultNavigationProp<'HomeScreen'>> = ({ navigation }) => {
  const { data, loading } = useTypedSelector((state) => state.data);
  const { styles } = useAppStyles(homeStyles);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAlldataAction());
  }, []);
  return (
    <SafeAreaView style={styles.baseSafeAreaView}>
      <PageScreensTopTitle title={'HOME'} />
    </SafeAreaView>
  );
};

export default HomeScreen;

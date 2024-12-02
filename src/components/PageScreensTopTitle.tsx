import { type FC } from 'react';
import { Text, View } from 'react-native';
import { useAppStyles } from 'hooks/useAppStyles';

type Props = {
  title?: string;
};

const PageScreensTopTitle: FC<Props> = ({ title }) => {
  const { styles } = useAppStyles();

  return (
    <View style={styles.headerContect}>
      <Text style={styles.headerTitleScreen}>{title}</Text>
    </View>
  );
};

export default PageScreensTopTitle;

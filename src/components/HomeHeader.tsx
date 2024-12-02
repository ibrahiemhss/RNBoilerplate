import { FC } from 'react';
import { View, Text } from 'react-native';
import { homeHeaderStyle } from 'styles/homeHeader.style';
import { useAppStyles } from 'hooks/useAppStyles';
import UserIcon from 'assets/svg/user.svg';
import BellIcon from 'assets/svg/bell.svg';

type HeaderProps = {
  name: string;
  imagUrl?: string;
};

const HomeHeader: FC<HeaderProps> = ({ name, imagUrl }) => {
  const { styles } = useAppStyles(homeHeaderStyle);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}>
          <UserIcon width={40} height={40} />
        </View>
        <View style={styles.userInfoDetails}>
          <Text style={styles.greeting}>Hello</Text>
          <Text style={styles.username}>{name}</Text>
        </View>
      </View>
      <View style={styles.circle}>
        <BellIcon width={24} height={24} style={styles.notificationIcon} />
      </View>
    </View>
  );
};

export default HomeHeader;

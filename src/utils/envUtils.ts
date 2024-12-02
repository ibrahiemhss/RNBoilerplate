import Config from 'react-native-config';

export const getEnv = (key: string) => {
  return Config?.[key] ?? '';
};

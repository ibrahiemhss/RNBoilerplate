import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
};

const getData = async (key: string, defaultValue?: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return defaultValue;
  } catch (error) {
    return defaultValue;
  }
};
const clearData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
};

export default { setData, clearAll, clearData, getData };

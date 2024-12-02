import storageService from 'services/storageService';

const storageKey = 'RADIO_APP_STATE';

export const saveState = async (
  state: { [x: string]: any; hasOwnProperty: (arg0: never) => any },
  keys: string[] = [],
) => {
  try {
    const stateToPersist = keys.reduce((obj, key) => {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        return { ...obj, [key]: state[key] };
      }
      return obj;
    }, {});

    const serializedState = JSON.stringify(stateToPersist);
    await storageService.setData(storageKey, serializedState);
  } catch {
    /**/
  }
};

export const loadState = async () => {
  try {
    const serializedState = await storageService.getData(storageKey);
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

export const clearState = async () => {
  await storageService.clearData(storageKey);
};

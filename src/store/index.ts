import { configureStore } from '@reduxjs/toolkit';
import errorHandlingMiddleware from 'store/middleware/errorHandlingMiddleware';
import rootReducer from 'store/slices';
import rehydrateMiddleware from 'store/persistor/rehydrateMiddleware';

const appReducer = (state: any, action: any) => {
  if (action.type === 'REHYDRATE_STATE') {
    return { ...state, ...action.payload };
  }
  return rootReducer(state, action);
};

const store = configureStore({
  reducer: appReducer,
  // devTools: __DEV__ && {
  //   trace: true,
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 100,
      },
      serializableCheck: false,
    }).concat(errorHandlingMiddleware, rehydrateMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const storeDispatcher = <T>(action: T) => store.dispatch(action);
export const storeStateGetter = (state: string) => store.getState()[state];

export default store;

import { loadState } from 'store/persistor/storage';
import { rehydrateState } from 'store/persistor/actions';

const rehydrateMiddleware = (store: any) => (next: any) => (action: any) => {
  loadState().then((savedState) => {
    if (savedState) {
      store.dispatch(rehydrateState(savedState));
    }
  });
  return next(action);
};

export default rehydrateMiddleware;

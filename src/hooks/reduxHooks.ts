import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from 'store';
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useTypedSelector = <TSelected>(
  selector: (state: RootState) => TSelected,
): TSelected => {
  return useSelector(selector);
};

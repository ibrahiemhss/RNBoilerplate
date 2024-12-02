import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSimpleDataApi } from 'store/api/data.api';
import { DataModel } from 'models/data.model';

export interface dataState {
  data: DataModel[] | [];
  loading: boolean;
  page: number;
  hasMore: boolean;
}

export const initialState: dataState = {
  data: [],
  loading: false,
  page: 1,
  hasMore: true,
};

export const getAlldataAction = createAsyncThunk<DataModel[]>('orders/delivery', async () => {
  const data = await getSimpleDataApi();
  return data || [];
});

export const mainDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAlldataAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAlldataAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAlldataAction.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default mainDataSlice.reducer;

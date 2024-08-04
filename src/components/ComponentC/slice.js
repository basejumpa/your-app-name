import { createSlice } from '@reduxjs/toolkit';
import { registerReducer } from '../../App';

const initialState = {};

const componentCSlice = createSlice({
  name: 'componentC',
  initialState,
  reducers: {},
});

registerReducer('componentC', componentCSlice.reducer);

export default componentCSlice.reducer;
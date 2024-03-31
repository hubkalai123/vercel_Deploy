import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
    TodoData: any[],
}
const initialState: DataState = {
  TodoData : [],
};

export const authSlice = createSlice({
  name: "Todo_data",
  initialState,
  reducers: {
    setDataDisplay: (state, action: PayloadAction<any>) => {
      state.TodoData = action.payload;
    }
  },
});
export const {setDataDisplay} = authSlice.actions;

export default authSlice.reducer;

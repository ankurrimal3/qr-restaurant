import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

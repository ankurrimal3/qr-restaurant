import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * Function to initialzate user token
     * @param state
     * @param action
     */
    initToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwt from "jwt-decode";

export type UserInitState = {
  accessToken: string;
  isAuthenticated: boolean;
  redirectCount: number;
  roles: {
    list: string[];
    map: Record<string, unknown>;
  };
  permission: {
    list: string[];
    map: Record<string, unknown>;
  };
};

const initialState: UserInitState = {
  redirectCount: 0,
  accessToken: "",
  isAuthenticated: false,
  roles: {
    list: [],
    map: {}, // redux does not accept non-serializable values
  },
  permission: {
    list: [],
    map: {},
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * Function to initialzate user token
     * @param state
     * @param action payload action token
     */
    loginUser: (state, action: PayloadAction<string>) => {
      const accessToken = action.payload;

      const parsed = jwt("accessToken");
      debugger;

      state.accessToken = accessToken;
      state.isAuthenticated = true;
      state.redirectCount++;
    },

    logoutUser: () => {
      return initialState;
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;

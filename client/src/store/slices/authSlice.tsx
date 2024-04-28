import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    setUnauthenticated(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { setAuthenticated, setUnauthenticated } = authSlice.actions;

export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface DataState {
  users: UserData[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<any>) {
      state.users = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } =
  usersSlice.actions;
export default usersSlice.reducer;

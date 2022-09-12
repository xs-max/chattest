import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: ""
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    saveName: (state, {payload}) => {
        state.name = payload
    }
  },
});

export const { saveName } = UserSlice.actions;

export default UserSlice.reducer;

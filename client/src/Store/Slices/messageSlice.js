import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: []

};

const MessageSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getMessages: (state, { payload }) => {
      state.message = payload.message
    },
  },
});

export const { getMessages } = MessageSlice.actions;

export default MessageSlice.reducer;

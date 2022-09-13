import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: []

};

const MessageSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getMessages: (state, { payload }) => {
      console.log("in dispatch")
      state.messages = payload.messages
    },
  },
});

export const { getMessages } = MessageSlice.actions;

export default MessageSlice.reducer;

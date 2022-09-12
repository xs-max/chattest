import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './Slices/userSlice'
import MessageReducer from './Slices/messageSlice'

export default configureStore({
  reducer: {
    user: UserReducer,
    messages: MessageReducer
  },
});

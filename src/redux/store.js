import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";  // Kullanıcı slice'ı eklenecek

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

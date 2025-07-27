import { createSlice } from "@reduxjs/toolkit";

// Get stored values from localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));
const storedAuth = localStorage.getItem("isAuthenticated");

// Fix: Only authenticate if both user and auth flag are valid
const initialState = {
  isAuthenticated: storedAuth === "false" && storedUser !== null,
  user: storedUser || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

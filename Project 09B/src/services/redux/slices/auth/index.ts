import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../../axios/api";
import { User } from "../../../../interface/index";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credential: { email: string; password: string }) => {
    const response = await http.post("/api/auth/login", credential);
    return response;
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signup",
  async (credential: { username: string; email: string; password: string }) => {
    const response = await http.post("/api/auth/signup", credential);
    return response;
  }
);

interface authState {
  authenticated: boolean;
  token: string | null;
  loading: boolean;
  user: User | null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    token: "",
    loading: false,
    user: null,
  } as authState,
  reducers: {
    start_loading: (state) => {
      state.loading = true;
    },
    logout: (state) => {
      return {
        ...state,
        authenticated: false,
        token: "",
        loading: false,
        user: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        if (action.payload) {
          const { token, user } = action.payload;
          return {
            ...state,
            token: token,
            user: user,
            authenticated: true,
            loading: false,
          };
        } else {
          return {
            ...state,
            loading: false,
          };
        }
      })
      .addCase(signUpUser.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<any>) => {
        const { token, user } = action.payload;
        return {
          ...state,
          token: token,
          user: user,
          authenticated: true,
          loading: false,
        };
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

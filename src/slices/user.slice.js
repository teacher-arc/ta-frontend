import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, createUser, getUserByEmail } from "../services/auth.service";

export const createUserThunk = createAsyncThunk(
  "user/createUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await createUser({
        email,
        password,
      });

      console.log("response", response);
      if (response.status === 200) {
        localStorage.setItem("email", email);
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (e) {
      console.log("Error", e.response);
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await login({
        email,
        password,
      });

      console.log("response", response);
      if (response.status === 200) {
        localStorage.setItem("email", email);
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (e) {
      console.log("Error", e.response);
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const getUser = createAsyncThunk(
  "user/getByEmail",
  async ({ email }, thunkAPI) => {
    try {
      const response = await getUserByEmail(email);

      console.log("response", response);
      if (response.status === 200) {
        return response;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (e) {
      console.log("Error", e.response);
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    _id: "",
    email: "",
    isEmailVerified: "",
    userRole: "",
    about: "",
    course: "",
    dob: "",
    edOrg: "",
    lastName: "",
    firstName: "",
    location: "",
    whatsapp: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("email");
      state.email = "";
      state.isEmailVerified = "";
      state.userRole = "";
      state.about = "";
      state.course = "";
      state.dob = "";
      state.edOrg = "";
      state.lastName = "";
      state.firstName = "";
      state.location = "";
      state.whatsapp = "";
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: {
    // Extra reducer comes here
    [createUserThunk.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.email = payload.email;
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [createUserThunk.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.data.message;
    },
    [createUserThunk.pending]: (state) => {
      state.isFetching = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.email = payload.email;
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.data.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    //getUser
    [getUser.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state._id = payload.data.data._id;
      state.email = payload.data.data.email;
      state.isEmailVerified = payload.data.data.isEmailVerified;
      state.userRole = payload.data.data.userRole;
      state.about = payload.data.data.about;
      state.course = payload.data.data.course;
      state.dob = payload.data.data.dob;
      state.edOrg = payload.data.data.edOrg;
      state.lastName = payload.data.data.lastName;
      state.firstName = payload.data.data.firstName;
      state.location = payload.data.data.location;
      state.whatsapp = payload.data.data.whatsapp;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.data.message;
    },
    [getUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
});

export const { clearState, logOut } = userSlice.actions;

export const userSelector = (state) => state.user;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  assignmentUpload,
  getAssignmentByUserEmail,
} from "./../services/assignment.service";
import { useSelector, useDispatch } from "react-redux";

export const fetchAssignmentByEmail = createAsyncThunk(
  "assignment/createAssignment",
  async ({ email }, thunkAPI) => {
    try {
      const response = await getAssignmentByUserEmail(email);
      console.log("this is the response", response);
      return response;
    } catch (e) {
      console.log("Error", e.response);
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const UploadFileThunk = createAsyncThunk(
  "assignment/upload",
  async (payload, thunkAPI) => {
    try {
      const response = await assignmentUpload(payload);

      return response;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const displayAssignmentSlice = createSlice({
  name: "displayAssignment",
  initialState: {
    data: [],
  },
  reducers: {
    addToQuestionFiles: (state, action) => {
      state.questionFiles.push(action.payload);
    },
    addToReferenceMaterial: (state, action) => {
      state.referenceMaterials.push(action.payload);
    },
    addAssignmentId: (state, action) => {
      state.assignmentId = action.payload;
    },
    deleteFile: (state, action) => {
      const { file, fileType } = action.payload;
      if (fileType === "QUESTION_FILE") {
        state.questionFiles = state.questionFiles.filter(
          (f) => f.file.name !== file.name
        );
      } else if (fileType === "REFERENCE_MATERIAL") {
        state.referenceMaterials = state.referenceMaterials.filter(
          (f) => f.file.name !== file.name
        );
      }
    },
    clearState: (state) => {
      state.assignmentId = "";
      state.questionFiles = [];
      state.referenceMaterials = [];
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: {
    [fetchAssignmentByEmail.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchAssignmentByEmail.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [fetchAssignmentByEmail.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  clearState,
  addToQuestionFiles,
  addToReferenceMaterial,
  addAssignmentId,
  deleteFile,
} = displayAssignmentSlice.actions;
export const displayAssignmentSelector = (state) => state.displayAssignment;

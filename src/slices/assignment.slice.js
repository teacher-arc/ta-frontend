import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  assignmentUpload,
  createAssignmentService,
} from "./../services/assignment.service";
import { useSelector, useDispatch } from "react-redux";

export const createAssignment = createAsyncThunk(
  "assignment/createAssignment",
  async (payLoad, thunkAPI) => {
    try {
      const response = await createAssignmentService(payLoad);
      const assignmentId = response.data.data.assignmentId;
      thunkAPI.dispatch(addAssignmentId(assignmentId));
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
export const assignmentSlice = createSlice({
  name: "assignment",
  initialState: {
    assignmentId: "",
    description: "",
    title: "",
    subject: "",
    dateTime: "",
    type: "",
    email: "",
    questionFiles: [],
    referenceMaterials: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
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
  extraReducers: {},
});

export const {
  clearState,
  addToQuestionFiles,
  addToReferenceMaterial,
  addAssignmentId,
  deleteFile,
} = assignmentSlice.actions;
export const assignmentSelector = (state) => state.assignment;

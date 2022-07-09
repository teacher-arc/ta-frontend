import axios from "axios";
import { BASE_URL } from "./index";

const API_PATHS = {
  CREATE_ASSIGNMENT: "/assignment",
  ASSIGNMENT_UPLOAD: "/assignment/upload",
  GET_ASSIGNMENT_BY_USER_EMAIL: "/assignment/user",
  GET_ASSIGNMENT: "/assignment",
  UPDATE_ASSIGNMENT: "/assignment",
  DELETE_ASSIGNMENT: "/assignment",
};

export const createAssignmentService = (payload) =>
  axios({
    method: "post",
    url: `${BASE_URL}${API_PATHS.CREATE_ASSIGNMENT}`,
    data: payload,
  });

export const assignmentUpload = (payload) =>
  axios({
    method: "post",
    url: `${BASE_URL}${API_PATHS.ASSIGNMENT_UPLOAD}`,
    data: payload,
  });

export const getAssignmentByUserEmail = (payload) =>
  axios({
    method: "get",
    url: `${BASE_URL}${API_PATHS.GET_ASSIGNMENT_BY_USER_EMAIL}`,
    data: payload,
  });
export const getAssignment = (payload) =>
  axios({
    method: "get",
    url: `${BASE_URL}${API_PATHS.CREATE_USER}`,
    data: payload,
  });

export const patchAssignment = (payload) =>
  axios({
    method: "patch",
    url: `${BASE_URL}${API_PATHS.CREATE_USER}`,
    data: payload,
  });

export const deleteAssignment = (payload) =>
  axios({
    method: "delete",
    url: `${BASE_URL}${API_PATHS.CREATE_USER}`,
    data: payload,
  });

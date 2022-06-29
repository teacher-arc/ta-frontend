import axios from "axios";
import { BASE_URL } from "./index";

const API_PATHS = {
  CREATE_USER: "/user", //post
  UPDATE_USER: "/user", //patch
  LOGIN: "/user/login",
  VERIFY_EMAIL: "/user/verify-email", //todo
  GET_USER_BY_ID: "/user/",
  GET_USER_BY_EMAIL: "/user/email/",
};

export const createUser = (payload) =>
  axios({
    method: "post",
    url: `${BASE_URL}${API_PATHS.CREATE_USER}`,
    data: payload,
  });

export const updateUser = (payload) =>
  axios({
    method: "patch",
    url: `${BASE_URL}${API_PATHS.UPDATE_USER}`,
    data: payload,
  });

export const login = (payload) =>
  axios({
    method: "get",
    url: `${BASE_URL}${API_PATHS.LOGIN}`,
    data: payload,
  });

export const getUserByEmail = (payload) =>
  axios({
    method: "patch",
    url: `${BASE_URL}${API_PATHS.GET_USER_BY_EMAIL}`,
    data: payload,
  });

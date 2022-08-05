import axios from "axios";
import { BASE_URL } from "./index";

const API_PATHS = {
  GET_TRANSACTION_BY_ID: "/transaction/",
  GET_TRANSACTION_BY_EMAIL: "/transaction/user",
};

export const getTransactionById = (ID) =>
  axios({
    method: "GET",
    url: `${BASE_URL}${API_PATHS.GET_TRANSACTION_BY_ID}/${ID}`,
  });

export const getTransactionByEmail = (EMAIL) =>
  axios({
    method: "GET",
    url: `${BASE_URL}${API_PATHS.GET_TRANSACTION_BY_EMAIL}/${EMAIL}`,
  });

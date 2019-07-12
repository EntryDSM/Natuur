import axios from "axios";
import { connectionUrl } from "./endpoint";

export const getLoginApi = () => {
  return axios.get(`${connectionUrl}/login`);
};

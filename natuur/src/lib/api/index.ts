import axios from "axios";
import { connectionUrl } from "./endpoint";

export const getLoginApi = async (payload: {
  email: string;
  password: string;
}) => {
  const response = await axios.post<{ access: string; refresh: string }>(
    `${connectionUrl}/login`,
    payload
  );

  return response.data;
};

export const sendApplicantPasswordApi = (payload: string) => {
  return axios.get(`${connectionUrl}/password/reset?verify=${payload}`);
};

export const setApplicantPasswordApi = (payload: {
  verify: string;
  password: string;
}) => {
  return axios.put(
    `${connectionUrl}/password/reset?verify=${payload.verify}`,
    payload.password
  );
};

export const sendVerificationEmailApi = (payload: string) => {
  return axios.post(`${connectionUrl}/password/reset?email=${payload}`);
};

export const getUserApplicationStatusApi = (accessToken: string) => {
  return axios.get(`${connectionUrl}/applicant/me/status`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

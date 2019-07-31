import axios from "axios";
import { connectionUrl } from "./endpoint";
import {
  UserApplicantStatusApiType,
  UserApplicantInfoApiType
} from "../../core/redux/actions/main/index";

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

export const getUserApplicationStatusApi = async ({
  accessToken
}: {
  accessToken: string;
}) => {
  const response = await axios.get<UserApplicantStatusApiType>(
    `${connectionUrl}/applicant/me/status`,
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return response.data;
};

export const getUserApplicantInfoApi = async ({
  email,
  accessToken
}: {
  email: string;
  accessToken: string;
}) => {
  const response = await axios.get<UserApplicantInfoApiType>(
    `${connectionUrl}/applicant/me/${email}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return response.data;
};

import axios from "axios";
import { connectionUrl } from "./endpoint";
import {
  UserApplicantStatusApiType,
  UserApplicantInfoApiType
} from "../../core/redux/actions/main";
import { DocumentApiType } from "../../core/redux/actions/intro";

const authorizationHeader = (
  accessToken: string
): { Authorization: string } => ({
  Authorization: `Bearer ${accessToken}`
});
const contentTypeHeader = { "Content-Type": "application/json" };

export const getLoginApi = async (payload: {
  email: string;
  password: string;
}) => {
  const response = await axios.post<{ access: string; refresh: string }>(
    `${connectionUrl}/login`,
    payload,
    {
      headers: contentTypeHeader
    }
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
    payload.password,
    {
      headers: contentTypeHeader
    }
  );
};

export const sendVerificationEmailApi = (payload: string) => {
  return axios.post(`${connectionUrl}/password/reset?email=${payload}`, null, {
    headers: contentTypeHeader
  });
};

export const getUserApplicationStatusApi = async ({
  accessToken
}: {
  accessToken: string;
}) => {
  const response = await axios.get<UserApplicantStatusApiType>(
    `${connectionUrl}/applicant/me/status`,
    {
      headers: authorizationHeader(accessToken)
    }
  );

  return response.data;
};

export const signupApi = (payload: { email: string; password: string }) => {
  return axios.post(`${connectionUrl}/signup`, payload, {
    headers: contentTypeHeader
  });
};

export const sendAuthenticationNumberByEmailApi = (payload: {
  email: string;
}) => {
  return axios.post(`${connectionUrl}/signup/verify`, payload, {
    headers: contentTypeHeader
  });
};

export const getRegisterVerifyNumberApi = (payload: { verify: string }) => {
  return axios.get(`${connectionUrl}/signup/verify?verify=${payload.verify}`);
};

export const getClassificationInfoApi = async (accessToken: string) => {
  const response = await axios.get(
    `${connectionUrl}/applicant/me/classification`,
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return response.data;
};

export const patchClassificationInfoApi = async (
  accessToken: string,
  payload: {
    is_ged: boolean;
    apply_type: string;
    social_detail_type?: string;
    is_daejeon: boolean;
    is_graduated?: boolean;
    additional_type?: string;
  }
) => {
  const response = await axios.patch(
    `${connectionUrl}/applicant/me/classification`,
    payload,
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

export const patchUserApplicantInfoApi = async (
  email: { email: string },
  accessToken: { accessToken: string },
  payload: {
    applicant_name: string;
    sex: string;
    birth_date: string;
    parent_name: string;
    parent_tel: string;
    applicant_tel: string;
    address: string;
    post_code: number;
  }
) => {
  const response = await axios.patch(
    `${connectionUrl}/applicant/me/${email.email}`,
    payload,
    {
      headers: { Authorization: `Bearer ${accessToken.accessToken}` }
    }
  );

  return response.data;
};

export const changeUserApplicantPhotoApi = async (
  email: { email: string },
  accessToken: { accessToken: string },
  payload: { file: File }
) => {
  const formData = new FormData();
  formData.append("file", payload.file);

  const response = await axios.put(
    `${connectionUrl}/applicant/me/photo/${email.email}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${accessToken.accessToken}`,
        "content-type": "multipart/form-data"
      }
    }
  );

  return response.data;
};

export const getUserDocumentApi = async (payload: { accessToken: string }) => {
  const response = await axios.get<DocumentApiType>(
    `${connectionUrl}/applicant/me/document`,
    {
      headers: { Authorization: `Bearer ${payload.accessToken}` }
    }
  );

  return response.data;
};

export const patchUserDocumentApi = async ({
  accessToken,
  self_introduction_text,
  study_plan_text
}: {
  accessToken: string;
  self_introduction_text?: string;
  study_plan_text?: string;
}) => {
  const response = await axios.patch(
    `${connectionUrl}/applicant/me/document`,
    { self_introduction_text, study_plan_text },
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return response.data;
};

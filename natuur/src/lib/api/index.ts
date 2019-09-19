import axios from "axios";
import { connectionUrl } from "./endpoint";
import {
  UserApplicantStatusApiType,
  UserApplicantInfoApiType
} from "../../core/redux/actions/main";
import {
  DiligenceApiType,
  GedGradeApiType,
  GradeApiType,
  DiligenceType,
  GedGradeType,
  GradeType
} from "../../core/redux/actions/grade";
import { DocumentApiType } from "../../core/redux/actions/intro";

const instanceAxios = axios.create({
  baseURL: "/api/v1",

  headers: { "Content-Type": "application/json" }
});

const authorizationHeader = (
  accessToken: string
): { Authorization: string } => ({
  Authorization: `Bearer ${accessToken}`
});

export const getLoginApi = async (payload: {
  email: string;
  password: string;
}) => {
  const response = await instanceAxios.post<{
    access: string;
    refresh: string;
  }>("/applicant/login", payload);

  return response.data;
};

export const userLogOutApi = async (payload: { refreshToken: string }) => {
  const response = await instanceAxios.delete("/applicant/logout", {
    headers: authorizationHeader(payload.refreshToken)
  });

  return response.data;
};

export const refreshJWTApi = async (payload: { refreshToken: string }) => {
  const response = await instanceAxios.patch("/applicant/refresh", {
    headers: authorizationHeader(payload.refreshToken)
  });

  return response.data;
};

export const sendApplicantPasswordApi = (payload: string) => {
  return instanceAxios.get(`/applicant/password/reset?verify=${payload}`);
};

export const setApplicantPasswordApi = (payload: {
  verify: string;
  password: string;
}) => {
  return instanceAxios.put(
    `/applicant/password/reset?verify=${payload.verify}`,
    payload.password
  );
};

export const sendVerificationEmailApi = (payload: string) => {
  return instanceAxios.post(`/applicant/password/reset?email=${payload}`);
};

export const getUserApplicationStatusApi = async ({
  accessToken
}: {
  accessToken: string;
}) => {
  const response = await instanceAxios.get<UserApplicantStatusApiType>(
    "/applicant/me/status",
    {
      headers: authorizationHeader(accessToken)
    }
  );

  return response.data;
};

export const signupApi = (payload: { email: string; password: string }) => {
  return instanceAxios.post("/applicant/signup", payload);
};

export const sendAuthenticationNumberByEmailApi = (payload: {
  email: string;
}) => {
  return instanceAxios.post("/applicant/signup/verify", payload);
};

export const getRegisterVerifyNumberApi = (payload: { verify: string }) => {
  return instanceAxios.get(`/applicant/signup/verify?verify=${payload.verify}`);
};

export const getClassificationInfoApi = async (accessToken: string) => {
  const response = await instanceAxios.get("/applicant/me/classification", {
    headers: authorizationHeader(accessToken)
  });

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
  const response = await instanceAxios.patch(
    "/applicant/me/classification",
    payload,
    {
      headers: authorizationHeader(accessToken)
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
  const response = await instanceAxios.get<UserApplicantInfoApiType>(
    "/applicant/me",
    {
      headers: authorizationHeader(accessToken)
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
  const response = await instanceAxios.patch("/applicant/me", payload, {
    headers: authorizationHeader(accessToken.accessToken)
  });

  return response.data;
};

export const changeUserApplicantPhotoApi = async (
  email: { email: string },
  accessToken: { accessToken: string },
  payload: { file: File }
) => {
  const formData = new FormData();
  formData.append("file", payload.file);

  const response = await instanceAxios.put(`/applicant/me/photo`, payload, {
    headers: {
      Authorization: `Bearer ${accessToken.accessToken}`,
      "content-type": "multipart/form-data"
    }
  });

  return response.data;
};

export const getUserDiligenceGradeApi = async (payload: {
  accessToken: string;
}) => {
  const response = await instanceAxios.get<DiligenceApiType>(
    "/applicant/me/diligence",
    {
      headers: authorizationHeader(payload.accessToken)
    }
  );

  return response.data;
};

export const patchUserDiligenceGradeApi = async (payload: DiligenceType) => {
  const response = await instanceAxios.patch(
    "/applicant/me/diligence",
    payload,
    {
      headers: authorizationHeader(payload.accessToken)
    }
  );

  return response.data;
};

export const getGedApplicantGradeApi = async (payload: {
  accessToken: string;
}) => {
  const response = await instanceAxios.get<GedGradeApiType>(
    "/applicant/me/ged-score",
    {
      headers: authorizationHeader(payload.accessToken)
    }
  );

  return response.data;
};

export const patchGedApplicantGradeApi = async (payload: GedGradeType) => {
  const response = await instanceAxios.patch(
    "/applicant/me/ged-score",
    payload,
    {
      headers: authorizationHeader(payload.accessToken)
    }
  );

  return response.data;
};

export const getApplicantGradeApi = async (payload: {
  accessToken: string;
}) => {
  const response = await instanceAxios.get<GradeApiType>(
    "/applicant/me/academic-score",
    {
      headers: authorizationHeader(payload.accessToken)
    }
  );

  return response.data;
};

export const patchApplicantGradeApi = async (payload: GradeType) => {
  const response = await instanceAxios.patch(
    "/applicant/me/academic-score",
    payload,
    {
      headers: authorizationHeader(payload.accessToken)
    }
  );

  return response.data;
};

export const getUserDocumentApi = async (payload: { accessToken: string }) => {
  const response = await instanceAxios.get<DocumentApiType>(
    "/applicant/me/document",
    {
      headers: authorizationHeader(payload.accessToken)
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
  const response = await instanceAxios.patch(
    "/applicant/me/document",
    { self_introduction_text, study_plan_text },
    {
      headers: authorizationHeader(accessToken)
    }
  );

  return response.data;
};

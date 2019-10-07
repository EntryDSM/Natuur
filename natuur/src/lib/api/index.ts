import axios from "axios";
import {
  GetApplicantDocumentApiType,
  UserApplicantStatusApiType,
  GedApplicationApiType,
  GraduatedApplicationApiType,
  UnGraduatedApplicationApiType
} from "./apiType";

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
  }>("/auth", payload);

  return response.data;
};

export const userLogOutApi = async (payload: { refreshToken: string }) => {
  const response = await instanceAxios.delete("/auth", {
    headers: {
      "X-Refresh-Token": `Bearer ${payload.refreshToken}`
    }
  });

  return response.data;
};

export const refreshJWTApi = async (payload: { refreshToken: string }) => {
  const response = await instanceAxios.patch("/auth", null, {
    headers: {
      "X-Refresh-Token": `Bearer ${payload.refreshToken}`
    }
  });

  return response.data;
};

export const sendApplicantPasswordApi = (payload: {
  email: string;
  verify: string;
}) => {
  return instanceAxios.get(
    `/applicant/password/reset/${payload.email}/${payload.verify}`
  );
};

export const setApplicantPasswordApi = (payload: {
  email: string;
  password: string;
}) => {
  return instanceAxios.put(`/applicant/password/reset`, payload);
};

export const sendVerificationEmailApi = (payload: string) => {
  return instanceAxios.post("/applicant/password/reset", {
    email: payload
  });
};

export const getUserApplicationStatusApi = async ({
  accessToken
}: {
  accessToken: string;
}) => {
  const response = await instanceAxios.get<UserApplicantStatusApiType>(
    "/self/status",
    {
      headers: authorizationHeader(accessToken)
    }
  );

  return response.data;
};

export const signupApi = (payload: { email: string; password: string }) => {
  return instanceAxios.post("/signup", payload);
};

export const getRegisterVerifyNumberApi = (payload: { verify: string }) => {
  return instanceAxios.get(`/signup/verify?key=${payload.verify}`);
};

export const changeUserApplicantPhotoApi = async (
  accessToken: { accessToken: string },
  payload: { file: File }
) => {
  const formData = new FormData();
  formData.append("image", payload.file);

  const response = await instanceAxios.put(`/self/photo`, formData, {
    headers: {
      Authorization: `Bearer ${accessToken.accessToken}`,
      "content-type": "multipart/form-data"
    }
  });

  return response.data;
};

export const getUserApplicantPhotoApi = async (payload: {
  accessToken: string;
}) => {
  const response = await instanceAxios.get<Blob>("/self/photo", {
    headers: {
      Accept: "image/*",
      Authorization: `Bearer ${payload.accessToken}`
    },
    responseType: "blob"
  });

  return response.data;
};

export const getApplicationDocumentApi = async (payload: {
  accessToken: string;
}) => {
  const response = await instanceAxios.get<GetApplicantDocumentApiType>(
    "/self/application",
    {
      headers: {
        Authorization: `Bearer ${payload.accessToken}`
      }
    }
  );

  return response.data;
};

export const putGedApplicationDocumentApi = async (
  payload: GedApplicationApiType & {
    accessToken: string;
  }
) => {
  const response = await instanceAxios.put(
    "/self/application/ged",
    {
      classification: payload.classification,
      personal_information: payload.personal_information,
      ged_grade: payload.ged_grade,
      self_introduction_and_study_plan: payload.self_introduction_and_study_plan
    },
    {
      headers: {
        Authorization: `Bearer ${payload.accessToken}`
      }
    }
  );

  return response.data;
};

export const putGraduatedApplicationDocumentApi = async (
  payload: GraduatedApplicationApiType & {
    accessToken: string;
  }
) => {
  const response = await instanceAxios.put(
    "/self/application/graduated",
    {
      classification: payload.classification,
      personal_information: payload.personal_information,
      diligence_grade: payload.diligence_grade,
      school_grade: payload.school_grade,
      self_introduction_and_study_plan: payload.self_introduction_and_study_plan
    },
    {
      headers: {
        Authorization: `Bearer ${payload.accessToken}`
      }
    }
  );

  return response.data;
};

export const putUnGraduatedApplicationDocumentApi = async (
  payload: UnGraduatedApplicationApiType & {
    accessToken: string;
  }
) => {
  const response = await instanceAxios.put(
    "/self/application/ungraduated",
    {
      classification: payload.classification,
      personal_information: payload.personal_information,
      diligence_grade: payload.diligence_grade,
      school_grade: payload.school_grade,
      self_introduction_and_study_plan: payload.self_introduction_and_study_plan
    },
    {
      headers: {
        Authorization: `Bearer ${payload.accessToken}`
      }
    }
  );

  return response.data;
};

export const patchFianlSubmitApi = async (payload: { accessToken: string }) => {
  const response = await instanceAxios.patch(
    "/self/application/final-submit",
    null,
    {
      headers: authorizationHeader(payload.accessToken)
    }
  );

  return response.data;
};

export const getSchoolDataApi = async (payload: {
  accessToken: string;
  school: string;
}) => {
  const response = await instanceAxios.get<string[]>("/school/search", {
    headers: {
      Authorization: `Bearer ${payload.accessToken}`
    },
    params: {
      query: payload.school
    }
  });

  return response.data;
};

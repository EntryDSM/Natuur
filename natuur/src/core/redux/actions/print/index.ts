import { GetCalculatedScoreApiType } from "../../../../lib/api/apiType";

export const GET_CALUCULATED_SCORE = "GET_CALUCULATED_SCORE";
export const GET_CALUCULATED_SCORE_SUCCESS = "GET_CALUCULATED_SCORE_SUCCESS";
export const GET_CALUCULATED_SCORE_FAILURE = "GET_CALUCULATED_SCORE_FAILURE";

export interface GetCalculatedScore {
  type:
    | typeof GET_CALUCULATED_SCORE
    | typeof GET_CALUCULATED_SCORE_SUCCESS
    | typeof GET_CALUCULATED_SCORE_FAILURE;
  payload: {
    accessToken: string;
    calculatedScore?: GetCalculatedScoreApiType;
    caluculatedScoreStatus?: 0 | 200 | 400 | 401 | 404;
  };
}

export type PrintActions = GetCalculatedScore;

export const getCalculatedScore = (payload: {
  accessToken: string;
}): GetCalculatedScore => ({
  payload,
  type: GET_CALUCULATED_SCORE
});

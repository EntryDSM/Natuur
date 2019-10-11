import {
  PrintActions,
  GET_CALUCULATED_SCORE,
  GET_CALUCULATED_SCORE_SUCCESS,
  GET_CALUCULATED_SCORE_FAILURE
} from "../../actions/print";
import { GetCalculatedScoreApiType } from "../../../../lib/api/apiType";

type RootState = {
  caluculatedScoreStatus: 0 | 200 | 400 | 401 | 404;
} & GetCalculatedScoreApiType;

const initialstate: RootState = {
  caluculatedScoreStatus: 0,
  first_grade_score: 0,
  second_grade_scores: 0,
  third_grade_scores: 0,
  conversion_score: 0,
  attendance_score: 0,
  volunteer_time: 0,
  final_score: 0,
  volunteer_score: 0,
  ged_average_score: 0
};

const printReducer = (
  state = initialstate,
  action: PrintActions
): RootState => {
  switch (action.type) {
    case GET_CALUCULATED_SCORE:
      return {
        ...state
      };
    case GET_CALUCULATED_SCORE_SUCCESS: {
      const {
        first_grade_score,
        second_grade_scores,
        third_grade_scores,
        conversion_score,
        attendance_score,
        volunteer_time,
        final_score,
        volunteer_score,
        ged_average_score
      } = action.payload.calculatedScore;

      return {
        ...state,
        first_grade_score,
        second_grade_scores,
        third_grade_scores,
        conversion_score,
        attendance_score,
        volunteer_time,
        final_score,
        volunteer_score,
        ged_average_score,
        caluculatedScoreStatus: 200
      };
    }
    case GET_CALUCULATED_SCORE_FAILURE:
      return {
        ...state,
        caluculatedScoreStatus: action.payload.caluculatedScoreStatus
      };
    default:
      return state;
  }
};

export default printReducer;

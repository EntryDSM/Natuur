import {
  MainActionTypes,
  GET_USER_APPLICANT_STATUS,
  GET_USER_APPLICANT_STATUS_FAILURE,
  GET_USER_APPLICANT_STATUS_SUCCESS
} from "../../actions/main";

export interface RootState {
  isPaid?: boolean;
  isPassedFirstApply?: boolean;
  isPassedFinalApply?: boolean;
  isPrintedApplicationArrived?: boolean;
  isFinalSubmit?: boolean;
  receiptCode?: number;
  examCode?: number;
  isSuccess?: boolean;
  isError?: boolean;
  isWaiting?: boolean;
}

const initialStae: RootState = {
  isPaid: false,
  isPassedFirstApply: false,
  isPassedFinalApply: false,
  isPrintedApplicationArrived: false,
  isFinalSubmit: false,
  receiptCode: 0,
  examCode: 0,
  isSuccess: false,
  isError: false,
  isWaiting: false
};

const mainReducer = (
  state = initialStae,
  action: MainActionTypes
): RootState => {
  switch (action.type) {
    case GET_USER_APPLICANT_STATUS: {
      return {
        ...state,
        isWaiting: true
      };
    }
    case GET_USER_APPLICANT_STATUS_SUCCESS: {
      const {
        isPaid,
        isPassedFirstApply,
        isPrintedApplicationArrived,
        isFinalSubmit,
        receiptCode,
        examCode
      } = action.payload;
      return {
        ...state,
        isPaid,
        isPassedFirstApply,
        isPrintedApplicationArrived,
        isFinalSubmit,
        receiptCode,
        examCode,
        isSuccess: true,
        isError: false,
        isWaiting: false
      };
    }
    case GET_USER_APPLICANT_STATUS_FAILURE: {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isWaiting: false
      };
    }
    default:
      return state;
  }
};

export default mainReducer;

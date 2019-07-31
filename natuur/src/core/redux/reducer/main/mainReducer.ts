import {
  MainActionTypes,
  UserApplicantStatusApiType,
  UserApplicantInfoApiType,
  GET_USER_APPLICANT_STATUS,
  GET_USER_APPLICANT_STATUS_FAILURE,
  GET_USER_APPLICANT_STATUS_SUCCESS,
  GET_USER_APPLICANT_INFOMATION,
  GET_USER_APPLICANT_INFOMATION_SUCCESS,
  GET_USER_APPLICANT_INFOMATION_FAILURE
} from "../../actions/main";

export interface RootState
  extends UserApplicantStatusApiType,
    UserApplicantInfoApiType {
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
  email: "",
  applicantName: "",
  sex: "",
  birthDate: "",
  parentName: "",
  parentTel: "",
  applicantTel: "",
  address: "",
  postCode: 0,
  imagePath: "",
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
    case GET_USER_APPLICANT_INFOMATION: {
      return {
        ...state
      };
    }
    case GET_USER_APPLICANT_INFOMATION_SUCCESS: {
      const {
        email,
        applicantName,
        sex,
        birthDate,
        parentName,
        parentTel,
        applicantTel,
        address,
        postCode,
        imagePath
      } = action.payload;
      return {
        ...state,
        isWaiting: true,
        email,
        applicantName,
        sex,
        birthDate,
        parentName,
        parentTel,
        applicantTel,
        address,
        postCode,
        imagePath
      };
    }
    case GET_USER_APPLICANT_INFOMATION_FAILURE: {
      return {
        ...state,
        isWaiting: true
      };
    }
    default:
      return state;
  }
};

export default mainReducer;

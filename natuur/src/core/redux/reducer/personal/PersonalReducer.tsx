import {
  SEARCH_ADDRESS,
  SEARCH_ADDRESS_SUCCESS,
  SEARCH_ADDRESS_FAILURE,
  GET_APPLICANT_INFO,
  GET_APPLICANT_INFO_SUCCESS,
  GET_APPLICANT_INFO_FAILURE,
  PATCH_APPLICANT_INFO,
  PATCH_APPLICANT_INFO_SUCCESS,
  PATCH_APPLICANT_INFO_FAILURE,
  PUT_APPLICANT_PHOTO,
  PUT_APPLICANT_PHOTO_SUCCESS,
  PUT_APPLICANT_PHOTO_FAILURE,
  GET_APPLICANT_PHOTO,
  GET_APPLICANT_PHOTO_SUCCESS,
  GET_APPLICANT_PHOTO_FAILURE,
  GET_ADDRESS_DATA,
  SET_NAME,
  SET_GENDER,
  SET_BIRTH_YEAR,
  SET_BIRTH_MONTH,
  SET_BIRTH_DATE,
  SET_CLASS,
  SET_STUDENT_ID,
  SET_MIDDLE_SCHOOL,
  SET_PARENTS_NAME,
  SET_SCHOOL_CONTACT,
  SET_PARENTS_CONTACT,
  SET_USER_CONTACT,
  SET_DETAILED_ADDRESS,
  SET_FILE,
  PersonalActionTypes
} from "../../actions/personal";

interface RootState {
  isSuccess: boolean;
  addressData: Array<{
    address_name: string;
    address: {
      address_name: string;
    };
    road_address: {
      address_name: string;
      zone_no: string;
    };
  }>;
  name: string;
  gender: string;
  birthYear: string;
  birthMonth: string;
  birthDate: string;
  userClass: string;
  studentID: string;
  middleSchool: string;
  parentsName: string;
  schoolContact: string;
  parentsContact: string;
  userContact: string;
  zipCode: string;
  address: string;
  detailedAddress: string;
  file: string;
  imagePath: string;
}

const initialState: RootState = {
  isSuccess: false,
  addressData: [],
  name: "",
  gender: "",
  birthYear: "",
  birthMonth: "",
  birthDate: "",
  userClass: "",
  studentID: "",
  middleSchool: "",
  parentsName: "",
  schoolContact: "",
  parentsContact: "",
  userContact: "",
  zipCode: "",
  address: "",
  file: "",
  detailedAddress: "",
  imagePath: ""
};

const PersonalReducer = (
  state = initialState,
  action: PersonalActionTypes
): RootState => {
  switch (action.type) {
    case SEARCH_ADDRESS:
      return {
        ...state
      };
    case SEARCH_ADDRESS_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        addressData: action.payload.documents
      };
    case SEARCH_ADDRESS_FAILURE:
      return {
        ...state
      };
    case GET_APPLICANT_INFO:
      return {
        ...state
      };
    case GET_APPLICANT_INFO_SUCCESS: {
      const {
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
        name: applicantName,
        gender: sex,
        birthYear: birthDate ? birthDate.split("-")[0] : "",
        birthMonth: birthDate ? birthDate.split("-")[1] : "",
        birthDate: birthDate ? birthDate.split("-")[2] : "",
        userClass: "",
        studentID: "",
        middleSchool: "",
        parentsName: parentName,
        schoolContact: "",
        parentsContact: parentTel,
        userContact: applicantTel,
        zipCode: `${postCode}`,
        address: address ? address.split("/")[0] : "",
        detailedAddress: address ? address.split("/")[1] : "",
        imagePath
      };
    }

    case GET_APPLICANT_INFO_FAILURE:
      return {
        ...state
      };
    case PATCH_APPLICANT_INFO:
      return {
        ...state
      };
    case PATCH_APPLICANT_INFO_SUCCESS:
      return {
        ...state
      };
    case PATCH_APPLICANT_INFO_FAILURE:
      return {
        ...state
      };
    case PUT_APPLICANT_PHOTO:
      return {
        ...state
      };
    case PUT_APPLICANT_PHOTO_SUCCESS:
      return {
        ...state
      };
    case PUT_APPLICANT_PHOTO_FAILURE:
      return {
        ...state
      };
    case GET_APPLICANT_PHOTO:
      return {
        ...state
      };
    case GET_APPLICANT_PHOTO_SUCCESS: {
      const { file } = action.payload;
      const url = URL.createObjectURL(new Blob([file]));

      return {
        ...state,
        file: url
      };
    }
    case GET_APPLICANT_PHOTO_FAILURE:
      return {
        ...state
      };
    case GET_ADDRESS_DATA:
      return {
        ...state,
        zipCode: action.payload.zipCode,
        address: action.payload.address
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload.gender
      };
    case SET_BIRTH_YEAR:
      return {
        ...state,
        birthYear: action.payload.year
      };
    case SET_BIRTH_MONTH:
      return {
        ...state,
        birthMonth: action.payload.month
      };
    case SET_BIRTH_DATE:
      return {
        ...state,
        birthDate: action.payload.date
      };
    case SET_CLASS:
      return {
        ...state,
        userClass: action.payload.class
      };
    case SET_STUDENT_ID:
      return {
        ...state,
        studentID: action.payload.studentID
      };
    case SET_MIDDLE_SCHOOL:
      return {
        ...state,
        middleSchool: action.payload.school
      };
    case SET_PARENTS_NAME:
      return {
        ...state,
        parentsName: action.payload.name
      };
    case SET_SCHOOL_CONTACT:
      return {
        ...state,
        schoolContact: action.payload.contact
      };
    case SET_PARENTS_CONTACT:
      return {
        ...state,
        parentsContact: action.payload.contact
      };
    case SET_USER_CONTACT:
      return {
        ...state,
        userContact: action.payload.contact
      };
    case SET_DETAILED_ADDRESS:
      return {
        ...state,
        detailedAddress: action.payload.address
      };
    case SET_FILE:
      return {
        ...state,
        file: action.payload
      };
    default:
      return state;
  }
};

export default PersonalReducer;

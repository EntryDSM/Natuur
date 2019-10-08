export const SEARCH_ADDRESS = "SEARCH_ADDRESS";
export const SEARCH_ADDRESS_SUCCESS = "SEARCH_ADDRESS_SUCCESS";
export const SEARCH_ADDRESS_FAILURE = "SEARCH_ADDRESS_FAILURE";
export const SEARCH_SCHOOL = "SEARCH_SCHOOL";
export const SEARCH_SCHOOL_SUCCESS = "SEARCH_SCHOOL_SUCCESS";
export const SEARCH_SCHOOL_FAILURE = "SEARCH_SCHOOL_FAILURE";
export const PUT_APPLICANT_PHOTO = "PUT_APPLICANT_PHOTO";
export const PUT_APPLICANT_PHOTO_SUCCESS = "PUT_APPLICANT_PHOTO_SUCCESS";
export const PUT_APPLICANT_PHOTO_FAILURE = "PUT_APPLICANT_PHOTO_FAILURE";
export const GET_APPLICANT_PHOTO = "GET_APPLICANT_PHOTO";
export const GET_APPLICANT_PHOTO_SUCCESS = "GET_APPLICANT_PHOTO_SUCCESS";
export const GET_APPLICANT_PHOTO_FAILURE = "GET_APPLICANT_PHOTO_FAILURE";

export const GET_ADDRESS_DATA = "GET_ADDRESS_DATA";
export const SET_NAME = "SET_NAME";
export const SET_GENDER = "SET_GENDER";
export const SET_BIRTH_YEAR = "SET_BIRTH_YEAR";
export const SET_BIRTH_MONTH = "SET_BIRTH_MONTH";
export const SET_BIRTH_DATE = "SET_BIRTH_DATE";
export const SET_CLASS = "SET_CLASS";
export const SET_STUDENT_ID = "SET_STUDENT_ID";
export const SET_MIDDLE_SCHOOL = "SET_MIDDLE_SCHOOL";
export const SET_PARENTS_NAME = "SET_PARENTS_NAME";
export const SET_SCHOOL_CONTACT = "SET_SCHOOL_CONTACT";
export const SET_PARENTS_CONTACT = "SET_PARENTS_CONTACT";
export const SET_USER_CONTACT = "SET_USER_CONTACT";
export const SET_DETAILED_ADDRESS = "SET_DETAILED_ADDRESS";
export const SET_FILE = "SET_FILE";

export interface SearchAddressApiType {
  documents?: Array<{
    address_name: string;
    address: {
      address_name?: string;
    };
    road_address: {
      address_name?: string;
      zone_no?: string;
    };
  }>;
}
export interface SearchAddressType extends SearchAddressApiType {
  query: string;
}
export interface SearchAddress {
  type:
    | typeof SEARCH_ADDRESS
    | typeof SEARCH_ADDRESS_SUCCESS
    | typeof SEARCH_ADDRESS_FAILURE;
  payload: SearchAddressType;
}

export interface SearchSchool {
  type:
    | typeof SEARCH_SCHOOL
    | typeof SEARCH_SCHOOL_SUCCESS
    | typeof SEARCH_SCHOOL_FAILURE;
  payload: {
    accessToken: string;
    school: string;
    schoolList?: string[];
  };
}

export interface ChangeApplicantPhotoType {
  file: File;
  accessToken: string;
}
export interface ChangeApplicantPhoto {
  type:
    | typeof PUT_APPLICANT_PHOTO
    | typeof PUT_APPLICANT_PHOTO_SUCCESS
    | typeof PUT_APPLICANT_PHOTO_FAILURE;
  payload: ChangeApplicantPhotoType;
}
export interface GetApplicantPhoto {
  type:
    | typeof GET_APPLICANT_PHOTO
    | typeof GET_APPLICANT_PHOTO_SUCCESS
    | typeof GET_APPLICANT_PHOTO_FAILURE;
  payload: { accessToken: string } & Partial<string>;
}

export interface getAddressData {
  type: typeof GET_ADDRESS_DATA;
  payload: { zipCode: string; address: string };
}
export interface SetName {
  type: typeof SET_NAME;
  payload: { name: string };
}
export interface SetGender {
  type: typeof SET_GENDER;
  payload: { gender: string };
}
export interface SetBirthDayYear {
  type: typeof SET_BIRTH_YEAR;
  payload: { year: string };
}
export interface SetBirthDayMonth {
  type: typeof SET_BIRTH_MONTH;
  payload: { month: string };
}
export interface SetBirthDayDate {
  type: typeof SET_BIRTH_DATE;
  payload: { date: string };
}
export interface SetClass {
  type: typeof SET_CLASS;
  payload: { class: string };
}
export interface SetStudentID {
  type: typeof SET_STUDENT_ID;
  payload: { studentID: string };
}
export interface SetMiddleSchool {
  type: typeof SET_MIDDLE_SCHOOL;
  payload: { school: string };
}
export interface SetParentsName {
  type: typeof SET_PARENTS_NAME;
  payload: { name: string };
}
export interface SetSchoolContact {
  type: typeof SET_SCHOOL_CONTACT;
  payload: { contact: string };
}
export interface SetParentsContact {
  type: typeof SET_PARENTS_CONTACT;
  payload: { contact: string };
}
export interface SetUserContact {
  type: typeof SET_USER_CONTACT;
  payload: { contact: string };
}
export interface SetDetaildAddress {
  type: typeof SET_DETAILED_ADDRESS;
  payload: { address: string };
}
export interface SetFile {
  type: typeof SET_FILE;
  payload: string;
}

export type PersonalActionTypes =
  | SearchAddress
  | SearchSchool
  | ChangeApplicantPhoto
  | GetApplicantPhoto
  | getAddressData
  | SetName
  | SetGender
  | SetBirthDayDate
  | SetBirthDayMonth
  | SetBirthDayYear
  | SetClass
  | SetStudentID
  | SetMiddleSchool
  | SetParentsName
  | SetSchoolContact
  | SetParentsContact
  | SetUserContact
  | SetDetaildAddress
  | SetFile
  | null;

export const searchAddress = (
  payload: SearchAddressType
): PersonalActionTypes => ({
  payload,
  type: SEARCH_ADDRESS
});

export const searchSchool = (payload: {
  accessToken: string;
  school: string;
}): PersonalActionTypes => ({
  payload,
  type: SEARCH_SCHOOL
});

export const changeApplicantPhoto = (
  payload: ChangeApplicantPhotoType
): PersonalActionTypes => ({
  payload,
  type: PUT_APPLICANT_PHOTO
});

export const getApplicantPhoto = (payload: { accessToken: string }) => ({
  payload,
  type: GET_APPLICANT_PHOTO
});

export const getAddressData = (payload: {
  zipCode: string;
  address: string;
}): PersonalActionTypes => ({
  payload,
  type: GET_ADDRESS_DATA
});

export const setName = (payload: { name: string }): PersonalActionTypes => ({
  payload,
  type: SET_NAME
});

export const setGender = (payload: {
  gender: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_GENDER
});

export const setBirthDayYear = (payload: {
  year: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_BIRTH_YEAR
});

export const setBirthDayMonth = (payload: {
  month: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_BIRTH_MONTH
});

export const setBirthDayDate = (payload: {
  date: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_BIRTH_DATE
});

export const setClass = (payload: { class: string }): PersonalActionTypes => ({
  payload,
  type: SET_CLASS
});

export const setStudentID = (payload: {
  studentID: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_STUDENT_ID
});

export const setMiddleSchool = (payload: {
  school: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_MIDDLE_SCHOOL
});

export const setParentsName = (payload: {
  name: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_PARENTS_NAME
});

export const setSchoolContact = (payload: {
  contact: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_SCHOOL_CONTACT
});

export const setParentsContact = (payload: {
  contact: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_PARENTS_CONTACT
});

export const setUserContact = (payload: {
  contact: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_USER_CONTACT
});

export const setDetailedAddress = (payload: {
  address: string;
}): PersonalActionTypes => ({
  payload,
  type: SET_DETAILED_ADDRESS
});

export const setFile = (payload: string): PersonalActionTypes => ({
  payload,
  type: SET_FILE
});

export const SEARCH_ADDRESS = "SEARCH_ADDRESS";
export const SEARCH_ADDRESS_SUCCESS = "SEARCH_ADDRESS_SUCCESS";
export const SEARCH_ADDRESS_FAILURE = "SEARCH_ADDRESS_FAILURE";
export const GET_APPLICANT_INFO = "GET_APPLICANT_INFO";
export const GET_APPLICANT_INFO_SUCCESS = "GET_APPLICANT_INFO_SUCCESS";
export const GET_APPLICANT_INFO_FAILURE = "GET_APPLICANT_INFO_FAILURE";
export const PATCH_APPLICANT_INFO = "PATCH_APPLICANT_INFO";
export const PATCH_APPLICANT_INFO_SUCCESS = "PATCH_APPLICANT_INFO_SUCCESS";
export const PATCH_APPLICANT_INFO_FAILURE = "PATCH_APPLICANT_INFO_FAILURE";
export const CHANGE_APPLICANT_PHOTO = "CHANGE_APPLICANT_PHOTO";
export const CHANGE_APPLICANT_PHOTO_SUCCESS = "CHANGE_APPLICANT_PHOTO_SUCCESS";
export const CHANGE_APPLICANT_PHOTO_FAILURE = "CHANGE_APPLICANT_PHOTO_FAILURE";

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
      address_name: string;
    };
    road_address: {
      address_name: string;
      zone_no: string;
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

export interface GetApplicantInfoApiType {
  email?: string;
  applicantName?: string;
  sex?: string;
  birthDate?: string;
  parentName?: string;
  parentTel?: string;
  applicantTel?: string;
  address?: string;
  postCode?: number;
  imagePath?: string;
}
export interface GetApplicantInfoType extends GetApplicantInfoApiType {
  email: string;
  accessToken: string;
}
export interface GetApplicantInfo {
  type:
    | typeof GET_APPLICANT_INFO
    | typeof GET_APPLICANT_INFO_SUCCESS
    | typeof GET_APPLICANT_INFO_FAILURE;
  payload: GetApplicantInfoType;
}

export interface PatchApplicantInfoType {
  email: { email: string };
  accessToken: { accessToken: string };
  payload: {
    applicant_name: string;
    sex: string;
    birth_date: string;
    parent_name: string;
    parent_tel: string;
    applicant_tel: string;
    address: string;
    post_code: number;
  };
}
export interface PatchApplicantInfo {
  type:
    | typeof PATCH_APPLICANT_INFO
    | typeof PATCH_APPLICANT_INFO_SUCCESS
    | typeof PATCH_APPLICANT_INFO_FAILURE;
  payload: PatchApplicantInfoType;
}

export interface ChangeApplicantPhotoType {
  email: { email: string };
  accessToken: { accessToken: string };
  payload: { file: File };
}
export interface ChangeApplicantPhoto {
  type:
    | typeof CHANGE_APPLICANT_PHOTO
    | typeof CHANGE_APPLICANT_PHOTO_SUCCESS
    | typeof CHANGE_APPLICANT_PHOTO_FAILURE;
  payload: ChangeApplicantPhotoType;
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
  | PatchApplicantInfo
  | SearchAddress
  | GetApplicantInfo
  | ChangeApplicantPhoto
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

export const getApplicantInfo = (
  payload: GetApplicantInfoType
): PersonalActionTypes => ({
  payload,
  type: GET_APPLICANT_INFO
});

export const patchApplicantInfo = (
  payload: PatchApplicantInfoType
): PersonalActionTypes => ({
  payload,
  type: PATCH_APPLICANT_INFO
});

export const changeApplicantPhoto = (
  payload: ChangeApplicantPhotoType
): PersonalActionTypes => ({
  payload,
  type: CHANGE_APPLICANT_PHOTO
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

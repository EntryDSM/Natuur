import { connect } from "react-redux";

import SelectCategory from "../../components/personalnformation/SelectCatrgory";
import { AppState } from "../../core/redux/store/store";
import {
  setName,
  setGender,
  setBirthDayYear,
  setBirthDayMonth,
  setBirthDayDate,
  setClass,
  setStudentID,
  setParentsName,
  setSchoolContact,
  setParentsContact,
  setUserContact,
  setDetailedAddress,
  setFile,
  setMiddleSchool,
  getAddressData
} from "../../core/redux/actions/personal";
import { setIsOpen } from "../../core/redux/actions/default";

export const mapStateToProps = (state: AppState) => ({
  isGed: state.infoReducer.isGed,
  imagePath: state.PersonalReducer.imagePath,
  file: state.PersonalReducer.file,
  personalInformation: state.applicantDocument.personal_information,
  isOpen: state.defaultReducer.isOpen
});

export const mapDispatchToProps = dispatch => ({
  setName: (payload: { name: string }) => dispatch(setName(payload)),
  setGender: (payload: { gender: string }) => dispatch(setGender(payload)),
  setBirthDayYear: (year: string) => dispatch(setBirthDayYear({ year })),
  setBirthDayMonth: (month: string) => dispatch(setBirthDayMonth({ month })),
  setBirthDayDate: (date: string) => dispatch(setBirthDayDate({ date })),
  setClass: (payload: { class: string }) => dispatch(setClass(payload)),
  setStudentID: (payload: { studentID: string }) =>
    dispatch(setStudentID(payload)),
  setParentsName: (payload: { name: string }) =>
    dispatch(setParentsName(payload)),
  setSchoolContact: (payload: { contact: string }) =>
    dispatch(setSchoolContact(payload)),
  setParentsContact: (payload: { contact: string }) =>
    dispatch(setParentsContact(payload)),
  setUserContact: (payload: { contact: string }) =>
    dispatch(setUserContact(payload)),
  setDetailedAddress: (payload: { address: string }) =>
    dispatch(setDetailedAddress(payload)),
  setMiddleSchool: (payload: { school: string }) =>
    dispatch(setMiddleSchool(payload)),
  setFile: (payload: string) => dispatch(setFile(payload)),
  getAddressData: (payload: { zipCode: string; address: string }) =>
    dispatch(
      getAddressData({ zipCode: payload.zipCode, address: payload.address })
    ),
  setIsOpen: (payload: {
    pageName: "info" | "personal" | "grade" | "intro";
    isOpen: boolean;
  }) => dispatch(setIsOpen(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCategory);

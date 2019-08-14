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
  setParantsName,
  setSchoolContact,
  setParantsContact,
  setUserContact,
  setDetailedAddress
} from "../../core/redux/actions/personal";

export const mapStateToProps = (state: AppState) => ({
  isGed: state.infoReducer.isGed,
  imagePath: state.PersonalReducer.imagePath
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
  setParantsName: (payload: { name: string }) =>
    dispatch(setParantsName(payload)),
  setSchoolContact: (payload: { contact: string }) =>
    dispatch(setSchoolContact(payload)),
  setParantsContact: (payload: { contact: string }) =>
    dispatch(setParantsContact(payload)),
  setUserContact: (payload: { contact: string }) =>
    dispatch(setUserContact(payload)),
  setDetailedAddress: (payload: { address: string }) =>
    dispatch(setDetailedAddress(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCategory);

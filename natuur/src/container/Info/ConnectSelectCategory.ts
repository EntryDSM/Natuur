import { connect } from "react-redux";

import Info from "./Info";
import { AppState } from "../../core/redux/store/store";
import {
  setIsGed,
  setApplyType,
  setSelectRegion,
  setGraduationClassification,
  setGraduationYear,
  setRemark
} from "../../core/redux/actions/info";
import { setIsOpen } from "../../core/redux/actions/default";

export const mapStateToProps = (state: AppState) => ({
  isGed: state.infoReducer.isGed,
  applyType: state.infoReducer.applyType,
  selectRegion: state.infoReducer.selectRegion,
  graduationClassification: state.infoReducer.graduationClassification,
  graduationYear: state.infoReducer.graduationYear,
  remarks: state.infoReducer.remarks,
  isSuccess: state.infoReducer.isSuccess,
  classification: state.applicantDocument.classification,
  isOpen: state.defaultReducer.isOpen
});

export const mapDispatchToProps = dispatch => ({
  setIsGed: (payload: boolean) => dispatch(setIsGed(payload)),
  setApplyType: (payload: string) => dispatch(setApplyType(payload)),
  setSelectRegion: (payload: string) => dispatch(setSelectRegion(payload)),
  setGraduationClassification: (payload: string) =>
    dispatch(setGraduationClassification(payload)),
  setGraduationYear: (payload: string) => dispatch(setGraduationYear(payload)),
  setRemark: (payload: string) => dispatch(setRemark(payload)),
  setIsOpen: (payload: {
    pageName: "info" | "personal" | "grade" | "intro";
    isOpen: boolean;
  }) => dispatch(setIsOpen(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);

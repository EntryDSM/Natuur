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

export const mapStateToProps = (state: AppState) => ({
  isGed: state.infoReducer.isGed,
  applyType: state.infoReducer.applyType,
  selectRegion: state.infoReducer.selectRegion,
  graduationClassification: state.infoReducer.graduationClassification,
  graduationYear: state.infoReducer.graduationYear,
  remarks: state.infoReducer.remarks,
  accessToken: state.userReducer.accessToken,
  isSuccess: state.infoReducer.isSuccess
});

export const mapDispatchToProps = dispatch => ({
  setIsGed: (payload: boolean) => dispatch(setIsGed(payload)),
  setApplyType: (payload: string) => dispatch(setApplyType(payload)),
  setSelectRegion: (payload: string) => dispatch(setSelectRegion(payload)),
  setGraduationClassification: (payload: string) =>
    dispatch(setGraduationClassification(payload)),
  setGraduationYear: (payload: string) => dispatch(setGraduationYear(payload)),
  setRemark: (payload: string) => dispatch(setRemark(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);

import { connect } from "react-redux";

import ViewClose from "../../components/main/viewCase/ViewClose";
import { AppState } from "../../core/redux/store/store";
import { getUserApplicantStatus } from "../../core/redux/actions/main";

export const mapStateToProps = (state: AppState) => ({
  isPassedFirstApply: state.mainReducer.is_passed_interview,
  isPassedFinalApply: state.mainReducer.is_passed_final_apply,
  isSuccess: state.mainReducer.isSuccess,
  isError: state.mainReducer.isError,
  isWaiting: state.mainReducer.isWaiting
});

export const mapDispatchToProps = dispatch => ({
  getUserApplicantStatus: accessToken =>
    dispatch(getUserApplicantStatus(accessToken))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewClose);

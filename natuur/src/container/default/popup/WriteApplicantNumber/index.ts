import { connect } from "react-redux";
import WriteVerificationNumber from "../../../../components/popup/Set/WriteVerificationNumber";
import { AppState } from "../../../../core/redux/store/store";
import {
  sendApplicantPassword,
  reSendVerificationNumber,
  revertReSendVerificationState
} from "../../../../core/redux/actions/verification";

export const mapStateToProps = (state: AppState) => ({
  isAppliSuccess: state.sendApplicantPasswordReducer.isAppliSuccess,
  isAppliWaiting: state.sendApplicantPasswordReducer.isAppliWaiting,
  isVerifySuccess: state.sendApplicantPasswordReducer.isVerifySuccess,
  isVerifyError: state.sendApplicantPasswordReducer.isVerifyError
});

export const mapDispatchToProps = dispatch => ({
  reSendVerificationNumber: (payload: string) =>
    dispatch(reSendVerificationNumber(payload)),
  sendApplicantPassword: (payload: string) =>
    dispatch(sendApplicantPassword(payload)),
  resetState: () => dispatch(revertReSendVerificationState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteVerificationNumber);

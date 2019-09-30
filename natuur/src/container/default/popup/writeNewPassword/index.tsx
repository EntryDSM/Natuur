import { connect } from "react-redux";
import WriteNewPassword from "../../../../components/popup/Set/WriteNewPassword";
import { AppState } from "../../../../core/redux/store/store";
import {
  resetApplicantPassword,
  revertResetApplicantState
} from "../../../../core/redux/actions/verification";

export const mapStateToProps = (state: AppState) => ({
  isError: state.writeNewPasswordReducer.isError,
  isSuccess: state.writeNewPasswordReducer.isSuccess,
  isWaiting: state.writeNewPasswordReducer.isWaiting
});

export const mapDispatchToProps = dispatch => ({
  resetApplicantPassword: (payload: { email: string; password: string }) =>
    dispatch(resetApplicantPassword(payload)),
  resetState: () => dispatch(revertResetApplicantState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteNewPassword);

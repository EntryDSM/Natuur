import { connect } from "react-redux";

import { AppState } from "../../../core/redux/store/store";
import LoginPopUp from "../../../components/popup/login/LoginPopUp";
import { logIn, resetState } from "../../../core/redux/actions/user";

export const mapStateToProps = (state: AppState) => ({
  isError: state.userReducer.isError,
  isWaiting: state.userReducer.isWaiting,
  isSuccess: state.userReducer.isSuccess,
  accessToken: state.userReducer.accessToken,
  refreshToken: state.userReducer.refreshToken
});

export const mapDispatchToProps = dispatch => ({
  getJWTcredential: (payload: { email: string; password: string }): void =>
    dispatch(logIn(payload)),
  resetState: () => dispatch(resetState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPopUp);

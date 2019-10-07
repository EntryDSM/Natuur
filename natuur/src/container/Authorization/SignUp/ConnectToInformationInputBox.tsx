import { connect } from "react-redux";
import InformationInputBox from "../../../components/Authorization/Information/InformationInputBox";
import { AppState } from "../../../core/redux/store/store";
import {
  sendAuthenticationNumberByEmail,
  getRegisterVerifyNumber,
  signUp
} from "../../../core/redux/actions/Authorization/index";

export const mapStateToProps = (state: AppState) => ({
  isGetSuccess: state.AuthorizationReducer.isGetSuccess,
  isGetError: state.AuthorizationReducer.isGetError,
  isSignUpWaiting: state.AuthorizationReducer.isSignUpWaiting,
  isSignUpSuccess: state.AuthorizationReducer.isSignUpSuccess,
  isSignUpError: state.AuthorizationReducer.isSignUpError
});

export const mapDispatchToProps = dispatch => ({
  getRegisterVerifyNumber: ({
    verify,
    email
  }: {
    verify: string;
    email: string;
  }) => dispatch(getRegisterVerifyNumber({ verify, email })),
  sendAuthenticationNumberByEmailApi: ({
    email,
    isResend
  }: {
    email: string;
    isResend?: boolean;
  }) => dispatch(sendAuthenticationNumberByEmail({ email, isResend })),
  signUp: ({ email, password }: { email: string; password: string }) =>
    dispatch(signUp({ email, password }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationInputBox);

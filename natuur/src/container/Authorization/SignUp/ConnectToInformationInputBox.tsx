import { connect } from "react-redux";
import InformationInputBox from "../../../components/Authorization/Information/InformationInputBox";
import { AppState } from "../../../core/redux/store/store";
import {
  sendAuthenticationNumberByEmail,
  getRegisterVerifyNumber,
  signUp
} from "../../../core/redux/actions/Authorization/index";

export const mapStateToProps = (state: AppState) => ({
  isSendSuccess: state.AuthorizationReducer.isSendSuccess,
  isSendError: state.AuthorizationReducer.isSendError,
  isSendWaiting: state.AuthorizationReducer.isSendWaiting,
  isGetSuccess: state.AuthorizationReducer.isGetSuccess,
  isGetError: state.AuthorizationReducer.isGetError,
  isSignUpSuccess: state.AuthorizationReducer.isSignUpSuccess,
  isSignUpError: state.AuthorizationReducer.isSignUpError
});

export const mapDispatchToProps = dispatch => ({
  getRegisterVerifyNumber: ({ verify }: { verify: string }) =>
    dispatch(getRegisterVerifyNumber({ verify })),
  sendAuthenticationNumberByEmailApi: ({ email }: { email: string }) =>
    dispatch(sendAuthenticationNumberByEmail({ email })),
  signUp: ({ email, password }: { email: string; password: string }) =>
    dispatch(signUp({ email, password }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationInputBox);

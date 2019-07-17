import { connect } from "react-redux";

import { SendedVerificationNumber } from "../../../../components/popup/Set";
import {
  sendVerificationNumber,
  revertSendVerificationState
} from "../../../../core/redux/actions/verification";
import { AppState } from "../../../../core/redux/store/store";

export const mapStateToProps = (state: AppState) => ({
  isSuccess: state.verificationReducer.isSuccess,
  isError: state.verificationReducer.isError
});

export const mapDispatchToProps = dispatch => ({
  sendVerificationNumber: (payload: string) =>
    dispatch(sendVerificationNumber(payload)),
  resetState: () => dispatch(revertSendVerificationState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendedVerificationNumber);

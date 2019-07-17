import { connect } from "react-redux";

import { AppState } from "../../../core/redux/store/store";
import PopUpModal from "../../../components/popup/PopUpModal";

export const mapStateToProps = (state: AppState) => ({
  isUpdatePopup: state.popUpReducer.isUpdatePopup,
  itIsUpdatePopUpCase: state.popUpReducer.itIsUpdatePopUpCase
});

export default connect(
  mapStateToProps,
  null
)(PopUpModal);

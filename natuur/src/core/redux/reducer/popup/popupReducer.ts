import {
  GET_IS_UPDATE_POPUP,
  UPDATE_POPUP_CASE,
  SHOW_POPUP,
  PopUpActionTypes
} from "../../actions/popup";

export interface RootState {
  isUpdatePopup: boolean;
  itIsUpdatePopUpCase: "default" | "login" | "set" | "check" | "pdf";
}

const initialState: RootState = {
  isUpdatePopup: false,
  itIsUpdatePopUpCase: "default"
};

const popUpReducer = (
  state = initialState,
  action: PopUpActionTypes
): RootState => {
  switch (action.type) {
    case GET_IS_UPDATE_POPUP: {
      return {
        ...state,
        isUpdatePopup: !state.isUpdatePopup
      };
    }
    case UPDATE_POPUP_CASE: {
      return {
        ...state,
        itIsUpdatePopUpCase: action.payload
      };
    }
    case SHOW_POPUP: {
      return {
        ...state,
        isUpdatePopup: action.payload
      };
    }
    default:
      return state;
  }
};

export default popUpReducer;

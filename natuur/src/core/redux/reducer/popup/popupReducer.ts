import {
  GET_IS_UPDATE_POPUP,
  UPDATE_POPUP_CASE,
  PopUpActionTypes
} from "../../actions/popup";

export interface RootState {
  isUpdatePopup: boolean;
  itIsUpdatePopUpCase: "default" | "login" | "set" | "check";
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
    default:
      return state;
  }
};

export default popUpReducer;

import { PayloadType } from "../../actions/default/index";
import {
  UPDATE_TOASTR,
  REMOVE_TOASTR,
  SET_IS_OPEN,
  DefaultActionTypes
} from "../../actions/default";

export interface RootState {
  toastrInformations: PayloadType[];
  isOpen: {
    info: boolean;
    personal: boolean;
    grade: boolean;
    intro: boolean;
  };
}

const initialState: RootState = {
  toastrInformations: [],
  isOpen: {
    info: false,
    personal: false,
    grade: false,
    intro: false
  }
};

const defaultReducer = (
  state = initialState,
  action: DefaultActionTypes
): RootState => {
  switch (action.type) {
    case UPDATE_TOASTR: {
      const { toastrMessage, toastrTitle, toastrState, timer } = action.payload;

      return {
        ...state,
        toastrInformations: [
          {
            timer,
            toastrMessage,
            toastrState,
            toastrTitle
          }
        ]
      };
    }
    case REMOVE_TOASTR: {
      const { toastrInformations } = state;
      return {
        ...state,
        toastrInformations: toastrInformations.filter(
          (_, id) => id !== action.payload
        )
      };
    }
    case SET_IS_OPEN: {
      const { pageName, isOpen } = action.payload;

      return {
        ...state,
        isOpen: { ...state.isOpen, [pageName]: isOpen }
      };
    }
    default:
      return state;
  }
};

export default defaultReducer;

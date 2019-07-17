import { PayloadType } from "../../actions/default/index";
import {
  UPDATE_TOASTR,
  DefaultActionTypes,
  REMOVE_TOASTR
} from "../../actions/default";

export interface RootState {
  toastrInformations: PayloadType[];
}

const initialState: RootState = {
  toastrInformations: []
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
    default:
      return state;
  }
};

export default defaultReducer;

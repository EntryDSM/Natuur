import {
  UPDATE_TOASTR,
  RootState,
  DefaultActionTypes,
  REMOVE_TOASTR,
  TURN_OFF_TOASTR
} from "../../actions/default";

const initialState: RootState = {
  toastrInformations: []
};

const defaultReducer = (
  state = initialState,
  action: DefaultActionTypes
): RootState => {
  switch (action.type) {
    case UPDATE_TOASTR: {
      const { toastrInformations } = state;
      const { toastrMessage, toastrTitle, toastrState, timer } = action.payload;

      return {
        ...state,
        toastrInformations: toastrInformations.concat({
          timer,
          toastrMessage,
          toastrState,
          toastrTitle
        })
      };
    }
    case REMOVE_TOASTR: {
      return {
        ...state,
        toastrInformations: []
      };
    }
    case TURN_OFF_TOASTR: {
      const { toastrInformations } = state;
      return {
        ...state,
        toastrInformations: toastrInformations.filter(
          (value, id) => id !== action.payload
        )
      };
    }
    default:
      return state;
  }
};

export default defaultReducer;

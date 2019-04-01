import {
  UPDATE_APP_CONTAINER,
  DefaultState,
  DefaultActionTypes
} from "../../actions/default";

const initialState: DefaultState = {
  container: ""
};

const defaultReducer = (
  state = initialState,
  action: DefaultActionTypes
): DefaultState => {
  switch (action.type) {
    case UPDATE_APP_CONTAINER: {
      return {
        ...state,
        ...action.container
      };
    }
    default:
      return state;
  }
};

export default defaultReducer;

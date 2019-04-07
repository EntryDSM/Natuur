import {
  UPDATE_APP_CONTAINER,
  RootState,
  DefaultActionTypes
} from "../../actions/default";

const initialState: RootState = {
  container: ""
};

const defaultReducer = (
  state = initialState,
  action: DefaultActionTypes
): RootState => {
  switch (action.type) {
    case UPDATE_APP_CONTAINER: {
      return {
        ...state,
        container: action.payload
      };
    }
    default:
      return state;
  }
};

export default defaultReducer;

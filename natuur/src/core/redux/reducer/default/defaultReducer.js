import { UPDATE_APP_CONTAINER } from "../../actions/default";

const initialState = {
  container: ""
};

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_APP_CONTAINER: {
      return {
        ...state,
        container: action.container
      };
    }
    default:
      return state;
  }
};

export default defaultReducer;

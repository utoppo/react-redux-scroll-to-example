import { combineReducers } from "redux";
import { initialState } from "./mockdata";

function all(state = initialState, action) {
  switch (action.type) {
    case "FILTER_PARTICIPANTS":
      return {
        ...state,
        active_category: {
          id: action.category_id,
          name: action.category_name
        }
      };
    case "SET_ACTIVE_PARTICIPANT":
      return {
        ...state,
        active_participant_id: action.participant_id
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  all
});

export { rootReducer as default };

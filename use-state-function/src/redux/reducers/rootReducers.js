import { combineReducers } from "redux";
import { memberReducer } from "./members/memberReducer";
import { postReducer } from "./posts/postReducer";

const rootReducer = combineReducers({
  membersState: memberReducer,
  postReducer: postReducer,
});

export default rootReducer;

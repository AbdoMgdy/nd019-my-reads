import { combineReducers } from "redux";

import users from "./users";
import quesions from "./questions";
import auth from "./auth";

export default combineReducers({
  quesions,
  users,
  auth,
});

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
// Import your other reducers

// Combine the reducers using combineReducers
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;

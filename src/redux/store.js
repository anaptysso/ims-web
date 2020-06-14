import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { signinReducer } from "./account/signin/signinReducer";

export const store = createStore(
  combineReducers({
    signin: signinReducer,
  }),
  composeWithDevTools()
);

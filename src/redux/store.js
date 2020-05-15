import { createStore, combineReducers } from "redux";
import { signinReducer } from "./account/signin/signinReducer";

export const store = createStore(
  combineReducers({
    signin: signinReducer,
  })
);

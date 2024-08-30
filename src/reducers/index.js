import { combineReducers } from 'redux';

import { reducer as form } from "redux-form";

import results from "./resultsReducer"

const rootReducer = combineReducers({
  form,
  results
});

export default rootReducer;
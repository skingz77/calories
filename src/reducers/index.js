import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import macroChecker from "./macroChecker";
import fitnessGoals from "./fitnessGoals";
import recInput from './recInput';
import recObject from './recObject';

export default combineReducers({
  macroChecker: macroChecker,
  form: formReducer,
  fitnessGoals,
  recInput,
  recObject
});

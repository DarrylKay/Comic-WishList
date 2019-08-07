import { combineReducers } from "redux";
import { appStateReducer } from "./appStateReducer";
import { booksDataReducer } from "./booksDataReducer";
import {imageDataReducer} from './imageDataReducer';


export default combineReducers({
  globalState: appStateReducer,
  booksData: booksDataReducer,
  imageData: imageDataReducer
});

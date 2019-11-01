import { combineReducers } from "redux";
import registers from "./registers.reducer";
import app from "./app.reducer";

export default combineReducers({
  app,
  registers
});

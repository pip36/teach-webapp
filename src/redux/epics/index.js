import { combineEpics } from "redux-observable";
import * as registersEpics from "./registers.epics";

export default combineEpics(...Object.values(registersEpics));

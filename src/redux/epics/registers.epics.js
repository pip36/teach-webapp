import { ofType } from "redux-observable";
import { map } from "rxjs/operators";
import {
  GET_REGISTERS,
  ADD_REGISTER,
  getRegisters,
  getRegistersSuccess
} from "redux/actions";

export const getRegistersEpic = (action$, _, { registers }) =>
  action$.pipe(
    ofType(GET_REGISTERS),
    registers.GET(),
    map(getRegistersSuccess)
  );

export const addRegisterEpic = (action$, _, { registers }) =>
  action$.pipe(
    ofType(ADD_REGISTER),
    registers.ADD(),
    map(getRegisters)
  );

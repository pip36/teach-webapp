import { ofType } from "redux-observable";
import { map } from "rxjs/operators";
import {
  GET_REGISTERS,
  ADD_REGISTER,
  getRegistersSuccess,
  addRegisterSuccess
} from "redux/actions";

export const getRegistersEpic = (action$, _, { localStorage }) =>
  action$.pipe(
    ofType(GET_REGISTERS),
    map(() =>
      getRegistersSuccess(JSON.parse(localStorage.getItem("registers") || "[]"))
    )
  );

export const addRegisterEpic = (action$, _, { localStorage }) =>
  action$.pipe(
    ofType(ADD_REGISTER),
    map(({ payload }) => {
      const id = Math.random() * 10000;
      const registers = JSON.parse(localStorage.getItem("registers") || "[]");
      registers.push({ id, ...payload });
      localStorage.setItem("registers", JSON.stringify(registers));
      return addRegisterSuccess({ id, ...payload });
    })
  );

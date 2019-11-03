import { ofType } from "redux-observable";
import { map } from "rxjs/operators";
import {
  GET_REGISTERS,
  ADD_REGISTER,
  getRegistersSuccess,
  addRegisterSuccess,
  REMOVE_REGISTER,
  removeRegisterSuccess
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

export const removeRegister = (action$, _, { localStorage }) =>
  action$.pipe(
    ofType(REMOVE_REGISTER),
    map(({ payload }) => {
      const registers = JSON.parse(localStorage.getItem("registers") || "[]");
      const newRegisters = registers.filter(x => x.id !== payload);

      localStorage.setItem("registers", JSON.stringify(newRegisters));

      return removeRegisterSuccess(payload);
    })
  );

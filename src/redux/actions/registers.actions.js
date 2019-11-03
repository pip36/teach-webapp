import { normalize } from "normalizr";
import { registerSchema, registerListSchema } from "redux/schemas";

export const GET_REGISTERS = "GET_REGISTERS";
export const GET_REGISTERS_SUCCESS = "GET_REGISTERS_SUCCESS";

export const ADD_REGISTER = "ADD_REGISTER";
export const ADD_REGISTER_SUCCESS = "ADD_REGISTER_SUCCESS";

export const getRegisters = () => ({
  type: GET_REGISTERS
});

export const getRegistersSuccess = registers => ({
  type: GET_REGISTERS_SUCCESS,
  payload: normalize(registers, registerListSchema)
});

export const addRegister = payload => ({
  type: ADD_REGISTER,
  payload
});

export const addRegisterSuccess = register => ({
  type: ADD_REGISTER_SUCCESS,
  payload: normalize(register, registerSchema)
});

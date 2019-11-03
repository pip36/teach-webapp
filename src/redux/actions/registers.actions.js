export const GET_REGISTERS = "GET_REGISTERS";
export const GET_REGISTERS_SUCCESS = "GET_REGISTERS_SUCCESS";

export const ADD_REGISTER = "ADD_REGISTER";
export const ADD_REGISTER_SUCCESS = "ADD_REGISTER_SUCCESS";

export const getRegisters = () => ({
  type: GET_REGISTERS
});

export const getRegistersSuccess = payload => ({
  type: GET_REGISTERS_SUCCESS,
  payload
});

export const addRegister = payload => ({
  type: ADD_REGISTER,
  payload
});

export const addRegisterSuccess = payload => ({
  type: ADD_REGISTER_SUCCESS,
  payload
});

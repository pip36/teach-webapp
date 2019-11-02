import { GET_REGISTERS_SUCCESS } from "../actions";

const initialState = {};

const registers = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTERS_SUCCESS:
      return action.payload.reduce((acc, x) => ({ ...acc, [x.id]: x }), {});
    default:
      return state;
  }
};

export const selectRegisters = state => ({
  registers: Object.keys(state.registers).map(key => state.registers[key])
});

export default registers;

import { ADD_REGISTER } from "../actions";

const initialState = {};

const registers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REGISTER:
      const id = Math.random() * 10000;
      return {
        ...state,
        [id]: { id, ...action.payload }
      };
    default:
      return state;
  }
};

export const selectRegisters = state => ({
  registers: Object.keys(state.registers).map(key => state.registers[key])
});

export default registers;

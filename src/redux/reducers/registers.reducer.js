import { GET_REGISTERS_SUCCESS, ADD_REGISTER_SUCCESS } from "redux/actions";

const initialState = {};

const registers = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTERS_SUCCESS:
      return action.payload.reduce((acc, x) => ({ ...acc, [x.id]: x }), {});
    case ADD_REGISTER_SUCCESS:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};

export const selectRegisters = state => ({
  registers: Object.keys(state.registers).map(key => state.registers[key])
});

export default registers;

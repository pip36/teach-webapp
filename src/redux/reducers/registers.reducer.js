import { GET_REGISTERS_SUCCESS, ADD_REGISTER_SUCCESS } from "redux/actions";

const initialState = {
  byId: {},
  allIds: []
};

const registers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REGISTERS_SUCCESS:
      return {
        byId: payload.entities.registers,
        allIds: payload.result
      };
    case ADD_REGISTER_SUCCESS:
      return {
        byId: {
          ...state.byId,
          ...payload.entities.registers
        },
        allIds: [...state.allIds, payload.result]
      };
    default:
      return state;
  }
};

export const selectRegisters = state =>
  state.registers.allIds.map(id => state.registers.byId[id]);

export default registers;

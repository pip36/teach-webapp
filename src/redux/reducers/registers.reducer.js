import { GET_REGISTERS_SUCCESS, ADD_REGISTER_SUCCESS } from "redux/actions";

const initialState = {
  byId: {},
  allIds: []
};

const registers = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTERS_SUCCESS:
      return {
        byId: action.payload.reduce((acc, x) => ({ ...acc, [x.id]: x }), {}),
        allIds: action.payload.map(x => x.id)
      };
    case ADD_REGISTER_SUCCESS:
      return {
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload
        },
        allIds: [...state.allIds, action.payload.id]
      };
    default:
      return state;
  }
};

export const selectRegisters = state =>
  state.registers.allIds.map(id => state.registers.byId[id]);

export default registers;

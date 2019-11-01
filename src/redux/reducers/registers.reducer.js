import { ADD_REGISTER } from "../actions";

const initialState = {};

const registers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REGISTER:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};

export default registers;

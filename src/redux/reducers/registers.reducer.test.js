import reducer from "./registers.reducer";
import { getRegistersSuccess, addRegisterSuccess } from "redux/actions";

describe("Registers Reducer", () => {
  it("Has the correct initial state", () => {
    const expectedState = {};

    expect(reducer(undefined, { type: "" })).toEqual(expectedState);
  });

  it("GET_REGISTERS_SUCCESS replaces the registers state", () => {
    const initialState = {
      3: { id: 3, name: "THREE" }
    };
    const action = getRegistersSuccess([
      { id: 1, name: "ONE" },
      { id: 2, name: "TWO" }
    ]);

    const expectedState = {
      1: { id: 1, name: "ONE" },
      2: { id: 2, name: "TWO" }
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("ADD_REGISTER_SUCCESS adds an additional register", () => {
    const initialState = {
      1: { id: 1, name: "ONE" }
    };

    const action = addRegisterSuccess({ id: 2, name: "TWO" });

    const expectedState = {
      1: { id: 1, name: "ONE" },
      2: { id: 2, name: "TWO" }
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});

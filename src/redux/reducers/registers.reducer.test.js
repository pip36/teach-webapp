import reducer, { selectRegisters } from "./registers.reducer";
import { getRegistersSuccess, addRegisterSuccess } from "redux/actions";

describe("Registers Reducer", () => {
  it("Has the correct initial state", () => {
    const expectedState = {
      byId: {},
      allIds: []
    };

    expect(reducer(undefined, { type: "" })).toEqual(expectedState);
  });

  it("GET_REGISTERS_SUCCESS replaces the registers state", () => {
    const initialState = {
      byId: {
        3: { id: 3, name: "THREE" }
      },
      allIds: [3]
    };

    const action = getRegistersSuccess([
      { id: 1, name: "ONE" },
      { id: 2, name: "TWO" }
    ]);

    const expectedState = {
      byId: {
        1: { id: 1, name: "ONE" },
        2: { id: 2, name: "TWO" }
      },
      allIds: [1, 2]
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("ADD_REGISTER_SUCCESS adds an additional register", () => {
    const initialState = {
      byId: {
        1: { id: 1, name: "ONE" }
      },
      allIds: [1]
    };

    const action = addRegisterSuccess({ id: 2, name: "TWO" });

    const expectedState = {
      byId: {
        1: { id: 1, name: "ONE" },
        2: { id: 2, name: "TWO" }
      },
      allIds: [1, 2]
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  describe("Selectors", () => {
    it("selectRegisters returns all registers as an array", () => {
      const state = {
        registers: {
          byId: {
            1: { id: 1, name: "ONE" },
            2: { id: 2, name: "TWO" }
          },
          allIds: [1, 2]
        }
      };

      expect(selectRegisters(state)).toEqual([
        { id: 1, name: "ONE" },
        { id: 2, name: "TWO" }
      ]);
    });
  });
});

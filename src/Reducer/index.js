import { createContext } from "react";
const myContext = createContext();
const { Provider } = myContext;

const init = (iniSt) => ({
  ...iniSt,
  offset: "offset",
});
const initialState = {
  column: "column",
  row: "row",
  dataJson: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SAVE_DATA_JSON": {
      return { ...state, dataJson: payload };
    }
    default:
      return state;
  }
};

export { myContext, initialState, Provider, reducer, init };
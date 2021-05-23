import React, { useReducer, useMemo } from "react";
import { reducer, initialState, init, Provider } from "./Reducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Containers from "./Container";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <Provider value={contextValue}>
      <div className="App">
        <Containers />
      </div>
    </Provider>
  );
}

export default App;

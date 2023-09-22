import { useState } from "react";
import { createContext, useContext } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  // singlePage state
  const [onSinglePage, setOnSinglePage] = useState();

  return (
    <StateContext.Provider value={{ onSinglePage, setOnSinglePage }}>
      {children}
    </StateContext.Provider>
  );
};
const useStateContext = () => {
  return useContext(StateContext);
};
export { StateProvider, StateContext, useStateContext };

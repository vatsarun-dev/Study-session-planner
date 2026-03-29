// Provide app-wide state so any component can read or update the current view.
import { createContext } from "react";
import React, { useState } from "react";
// creating the context(consumer)

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <MyContext.Provider
      value={{ click, setClick, data, setData, setShow, show }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;

import { createContext, useState } from "react";

export const CountContext = createContext({
  count: 0,
  setCount: () => {},
});

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const value = { count, setCount };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

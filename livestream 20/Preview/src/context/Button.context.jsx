import { createContext, useState } from "react";

export const ButtonContext = createContext({
  count: 0,
  setCount: () => {},
});

export const ButtonProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const value = { count, setCount };

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};

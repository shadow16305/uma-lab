import { createContext, useState } from "react";

export const ScrollContext = createContext({
  scrolled: false,
  setScrolled: () => {},
});

export const ScrollContextProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState();

  const ctxVal = {
    scrolled,
    setScrolled,
  };

  return <ScrollContext.Provider value={ctxVal}>{children}</ScrollContext.Provider>;
};

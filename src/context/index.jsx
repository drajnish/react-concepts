import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

// eslint-disable-next-line react/prop-types
const GlobalState = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const handleChangeTheme = () => {
    return setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <GlobalContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

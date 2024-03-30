
import React, { createContext, useReducer, useContext } from 'react';


const ThemeContext = createContext();


const initialState = {
  theme: 'light',
};


const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};


const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};


const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
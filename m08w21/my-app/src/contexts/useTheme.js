import { createContext, useState, useContext } from 'react';

const themeContext = createContext();

function useTheme() {
  return useContext(themeContext)
}

function ThemeProvider({ children }) {
  const [themeToggle, setThemeToggle] = useState(false);
  const handleThemeToggle = () => setThemeToggle(!themeToggle);
  
  const value = { themeToggle, handleThemeToggle }
  
  return (
    <themeContext.Provider value={ value }>
      { children }
    </themeContext.Provider>
  )
}

export { useTheme, ThemeProvider }

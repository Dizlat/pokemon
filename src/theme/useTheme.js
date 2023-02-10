import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";


export const useTheme = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : "dark"
    setTheme(newTheme)
  }
  return { theme, toggleTheme }

}

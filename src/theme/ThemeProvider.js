import {useState} from "react";
import {ThemeContext} from "./ThemeContext";


const ThemeProvider = (props) => {

  const [ theme, setTheme ] =useState('dark')

  const defaultValue = {
    theme, setTheme
  }

  return (
    <ThemeContext.Provider value={defaultValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from "./Toggle"
import { GlobalStyles, lightTheme, darkTheme } from "./globalStyles";
import {ThemeProvider} from "styled-components";

import  {DarkMode} from "./DarkMode";
export default function Navbar() {
    const [theme, toggleTheme] = DarkMode();
    
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
    <GlobalStyles/>
    <nav className='navbar'>
    <center>  <h2>cocktaildb</h2></center>
      <div className='nav-center'>
      <Toggle theme={theme} toggleTheme={toggleTheme}/>
       
        <ul className='nav-links'>
         <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    
    </nav>
    </ThemeProvider> 
  )

}
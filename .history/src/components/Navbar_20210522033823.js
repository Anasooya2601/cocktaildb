import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from "./Toggle"
import  {DarkMode} from "./DarkMode";
export default function Navbar() {
    const [theme, toggleTheme] = DarkMode();
  return (
    <nav className='navbar'>
      <div className='nav-center'>
      <Toggle theme={theme} toggleTheme={toggleTheme}/>
       
        <ul className='nav-links'>
         
        <h2>Cocktaildb</h2>
           
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
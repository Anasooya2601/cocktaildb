import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from "./Toggle"
import  {DarkMode} from "./DarkMode";
export default function Navbar() {
    const [theme, toggleTheme] = DarkMode();
  return (
    <nav className='navbar'>
      <div className='nav-center'>
       <h2>Cocktaildb</h2>
        <ul className='nav-links'>
            <li>
            <Toggle theme={theme} toggleTheme={toggleTheme}/>
            </li>
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
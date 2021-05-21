import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { GlobalStyles, lightTheme, darkTheme } from "../components/globalStyles";
import {ThemeProvider} from "styled-components";
import  {DarkMode} from "../components/DarkMode";
export default function Home() {
    const [theme, toggleTheme] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
 
    <main>
      <SearchForm />
      <CocktailList />
    </main>
   
  )
  
}

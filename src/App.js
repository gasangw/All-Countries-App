import './App.css';
import Navigation from './components/Nav/Navigation';
import Countries from './components/country/Countries';
import CountryDetails from './components/country/CountryDetails';
import { useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState('light');
  const changeTheme =() => {
    if(theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  };

  useEffect(()=>{
    document.body.className = theme
  },[theme])
  return (
    <div className={`App ${theme}`}>
      <Navigation changeTheme={changeTheme}/>
      <Routes>
        <Route path='/' element={<Countries theme={theme}/>} />
        <Route path="/name/:name" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;

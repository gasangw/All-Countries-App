import './App.css';
import Navigation from './components/Nav/Navigation';
import Countries from './components/country/Countries';
import { useState, useEffect} from "react";

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
      <Countries theme={theme}/>
    </div>
  );
}

export default App;

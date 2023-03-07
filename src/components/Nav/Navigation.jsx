import { BsMoon } from "react-icons/bs";
import './nav.css'

const Navigation =() => {
  const changeMode =()=> {
    ////Add styles for the dark mode
  }
  return (
      <div className='nav-container'>
        <p className="nav-para">Where in the world?</p>
          <span className="nav-icon" onClick={changeMode}> <BsMoon /> Dark Mode</span>
      </div>
  );
}

export default Navigation;
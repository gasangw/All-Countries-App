import { BsMoon } from "react-icons/bs";
import './nav.css'

const Navigation =() => {
  return (
      <div className='nav-container'>
        <p className="nav-para">Where in the world?</p>
          <span className="nav-icon"> <BsMoon /> Dark Mode</span>
      </div>
  );
}

export default Navigation;
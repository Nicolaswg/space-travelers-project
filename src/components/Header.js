// import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Header = () => (
  <div className="content-align">
    <header>
      <div className="main-title">
        <img src={planet} alt="space" className="planet-logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <div className="links">
        <a to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Rockets
        </a>
        <a to="/missions" className={({ isActive }) => (isActive ? 'active' : '')}>
          Missions
        </a>
        <a to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
          My Profile
        </a>
      </div>

    </header>
  </div>
);

export default Header;

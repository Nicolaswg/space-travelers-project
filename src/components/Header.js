import { NavLink } from 'react-router-dom';

// assets
import planet from '../assets/planet.png';

const Header = () => (
  <header>
    <div className="main-title">
      <img src={planet} alt="space" className="planet-logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <div className="links">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link ')}>
        Rockets
      </NavLink>
      <NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'link ')}>
        Missions
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'link ')}>
        My Profile
      </NavLink>
    </div>
  </header>
);

export default Header;

import './reset.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const App = () => (
  <Router>
    <Header className="App-header" />
    <Routes>
      <div className="App">
        <Route path="/missions" element={<Rockets className="rockets" />} />
        <Route path="/profile" element={<Missions className="missions" />} />
        <Route path="/profile" element={<Profile className="profile" />} />
      </div>
    </Routes>
  </Router>
);

export default App;

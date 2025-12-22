import { useLocation, Outlet } from 'react-router-dom';
import SubwayNav from './components/SubwayNav';
import './style.css';

function App() {
  const location = useLocation();
  
  // Determine active section from current path
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/' || path.startsWith('/profile')) return 'profile';
    if (path.startsWith('/projects')) return 'projects';
    if (path.startsWith('/reports') || path.startsWith('/wtr')) return 'reports';
    if (path.startsWith('/research')) return 'research';
    return 'profile';
  };

  return (
    <div className="App">
      <SubwayNav activeSection={getActiveSection()} />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
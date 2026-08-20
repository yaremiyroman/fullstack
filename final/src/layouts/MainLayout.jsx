import { NavLink, Outlet } from 'react-router-dom';

import { useTheme } from '../contexts/ThemeContext';


const getNavLinkClassName = ({ isActive }) =>
  isActive ? 'app-nav__link app-nav__link--active' : 'app-nav__link';

function MainLayout() {
  const { theme, toggleTheme } = useTheme();

  console.log('theme > ', theme);

  return (
    <div className={`app-shell ${theme}`}>
      <header className="app-header">
        <nav className="app-nav">
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/about">
            About
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/contact">
            Contact
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/post/1">
            Blog
          </NavLink>
        </nav>
        <div className="theme-selector">
          <button onClick={() => toggleTheme()}>☀️</button>
          <button onClick={() => toggleTheme()}>🌑</button>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

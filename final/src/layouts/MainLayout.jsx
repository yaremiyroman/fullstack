import { NavLink, Outlet, Link } from 'react-router-dom';

const getNavLinkClassName = ({ isActive }) =>
  isActive ? 'app-nav__link app-nav__link--active' : 'app-nav__link';

function MainLayout() {
  return (
    <div className="app-shell">
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
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

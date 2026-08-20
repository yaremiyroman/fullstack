import { NavLink, Outlet } from 'react-router-dom';

import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';


const getNavLinkClassName = ({ isActive }) =>
  isActive ? 'app-nav__link app-nav__link--active' : 'app-nav__link';

function MainLayout() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  console.log('theme > ', theme);

  return (
    <div className={`app-shell ${theme}`}>
      <header className="app-header">
        <nav className="app-nav">
          <NavLink className={getNavLinkClassName} to="/">
            {t('home')}
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/about">
            {t('about')}
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/contact">
            {t('contact')}
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/post/1">
            {t('blog')}
          </NavLink>
        </nav>
        <div className="language-selector">
          <span>{t('language')}: </span>
          <button disabled={language === 'en'} onClick={() => changeLanguage('en')}>
            EN
          </button>
          <button disabled={language === 'uk'} onClick={() => changeLanguage('uk')}>
            UA
          </button>
        </div>
        {/* <div className="theme-selector">
          <button onClick={() => toggleTheme()}>☀️</button>
          <button onClick={() => toggleTheme()}>🌑</button>
        </div> */}
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

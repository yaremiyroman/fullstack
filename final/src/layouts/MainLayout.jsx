import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';


const AppShell = styled.div`
  max-width: 960px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 24px;
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#e2e8f0' : '#1e293b')};
  background: ${({ $themeMode }) => ($themeMode === 'night' ? '#0f172a' : '#f8fafc')};
  transition: background 0.2s ease, color 0.2s ease;
`;

const Header = styled.header`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StyledNavLink = styled(NavLink)`
  padding: 8px 12px;
  border: 1px solid ${({ $themeMode }) => ($themeMode === 'night' ? '#334155' : '#cbd5e1')};
  border-radius: 8px;
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#e2e8f0' : '#1e293b')};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $themeMode }) => ($themeMode === 'night' ? '#1e293b' : '#e2e8f0')};
  }

  &.active {
    border-color: #2563eb;
    background: ${({ $themeMode }) => ($themeMode === 'night' ? '#1d4ed8' : '#dbeafe')};
    color: ${({ $themeMode }) => ($themeMode === 'night' ? '#f8fafc' : '#1d4ed8')};
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ControlLabel = styled.span`
  font-size: 0.9rem;
  opacity: 0.85;
`;

const ControlButton = styled.button`
  border: 1px solid ${({ $themeMode }) => ($themeMode === 'night' ? '#334155' : '#94a3b8')};
  background: ${({ $themeMode }) => ($themeMode === 'night' ? '#1e293b' : '#ffffff')};
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#e2e8f0' : '#1e293b')};
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Main = styled.main`
  background: ${({ $themeMode }) => ($themeMode === 'night' ? '#111827' : '#ffffff')};
  border: 1px solid ${({ $themeMode }) => ($themeMode === 'night' ? '#334155' : '#e2e8f0')};
  border-radius: 12px;
  padding: 24px;
`;

function MainLayout() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  return (
    <AppShell $themeMode={theme}>
      <Header>
        <Nav>
          <StyledNavLink
            $themeMode={theme}
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/"
          >
            {t('home')}
          </StyledNavLink>
          <StyledNavLink
            $themeMode={theme}
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/about"
          >
            {t('about')}
          </StyledNavLink>
          <StyledNavLink
            $themeMode={theme}
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/contact"
          >
            {t('contact')}
          </StyledNavLink>
        </Nav>
        <Controls>
          <ControlLabel>{t('language')}:</ControlLabel>
          <ControlButton
            $themeMode={theme}
            disabled={language === 'en'}
            onClick={() => changeLanguage('en')}
          >
            EN
          </ControlButton>
          <ControlButton
            $themeMode={theme}
            disabled={language === 'uk'}
            onClick={() => changeLanguage('uk')}
          >
            UA
          </ControlButton>
          <ControlButton $themeMode={theme} onClick={toggleTheme}>
            {theme === 'day' ? '🌑' : '☀️'}
          </ControlButton>
        </Controls>
      </Header>

      <Main $themeMode={theme}>
        <Outlet />
      </Main>
    </AppShell>
  )
}

export default MainLayout

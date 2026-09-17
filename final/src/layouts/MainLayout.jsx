import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

import LayoutEffectExample from '../components/LayoutEffectExample';
import Modal from '../components/Modal';

const AppShell = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#e2e8f0' : '#1e293b')};
  background: ${({ $themeMode }) => ($themeMode === 'night' ? '#0f172a' : '#f8fafc')};
  transition: background 0.2s ease, color 0.2s ease;
`;

const Header = styled(AppBar)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

const ControlButton = styled(Button)`
 padding: 6px 12px;
  border-radius: 6px;
  text-transform: none;
  font-weight: 500;
  transition: all 0.2s ease;
  min-width: auto;

  /* ========================================== */
  /* 1. REGULAR STATE (Unselected / Clickable)  */
  /* ========================================== */
  border: 1px solid ${({ $themeMode }) => ($themeMode === 'night' ? '#334155' : '#cbd5e1')};
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#94a3b8' : '#64748b')};
  background: transparent;

  /* HOVER STATE (Unselected Hover) */
  &:hover {
    background: ${({ $themeMode }) => ($themeMode === 'night' ? '#1e293b' : '#f1f5f9')};
    color: ${({ $themeMode }) => ($themeMode === 'night' ? '#e2e8f0' : '#1e293b')};
    border-color: ${({ $themeMode }) => ($themeMode === 'night' ? '#475569' : '#94a3b8')};
  }

  /* ========================================== */
  /* 2. ACTIVE STATE (Selected / Disabled)      */
  /* ========================================== */
  &:disabled {
    border-color: #2563eb; /* Consistent Blue Accent Border */
    background: ${({ $themeMode }) => ($themeMode === 'night' ? '#1e3a8a' : '#dbeafe')};
    color: ${({ $themeMode }) => ($themeMode === 'night' ? '#38bdf8' : '#1d4ed8')};
    cursor: not-allowed;
    opacity: 1; /* Overrides default MUI disabled fade opacity */
  }
`;

const Main = styled.main`
  background: ${({ $themeMode }) => ($themeMode === 'night' ? '#111827' : '#ffffff')};
  padding: 0 10px;
  min-height: calc(100vh - 64px);
`;

const menuId = 'primary-search-account-menu';

function MainLayout() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  const [showModal, setShowModal] = useState(false);

  return (
    <AppShell $themeMode={theme}>
      <Header position="static" sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backgroundImage: 'none' // Crucial if your theme uses dark mode gradients
      }}>
        <Toolbar sx={{ width: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Nav>
              <Button
                component={StyledNavLink} // Renders your styled component under the hood
                to="/"           // Passed automatically to NavLink
                sx={{
                  textTransform: 'none',   // Prevents MUI from forcing ALL CAPS text
                  minWidth: 'auto',        // Overrides default button widths if needed
                }}
              >
                {t('home')}
              </Button>
              <Button
                component={StyledNavLink} // Renders your styled component under the hood
                to="/about"           // Passed automatically to NavLink
                sx={{
                  textTransform: 'none',   // Prevents MUI from forcing ALL CAPS text
                  minWidth: 'auto',        // Overrides default button widths if needed
                }}
              >
                {t('about')}
              </Button>
              <Button
                component={StyledNavLink} // Renders your styled component under the hood
                to="/contact"           // Passed automatically to NavLink
                sx={{
                  textTransform: 'none',   // Prevents MUI from forcing ALL CAPS text
                  minWidth: 'auto',        // Overrides default button widths if needed
                }}
              >
                {t('contact')}
              </Button>
              <Button
                component={StyledNavLink} // Renders your styled component under the hood
                to="/add-post"           // Passed automatically to NavLink
                sx={{
                  textTransform: 'none',   // Prevents MUI from forcing ALL CAPS text
                  minWidth: 'auto',        // Overrides default button widths if needed
                }}
              >
                {t('addPost')}
              </Button>
            </Nav>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Controls>
              <ButtonGroup variant="outlined" aria-label="Basic button group">
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
              </ButtonGroup>

              <ControlButton $themeMode={theme} onClick={toggleTheme}>
                {theme === 'day' ? <BedtimeIcon /> : <SunnyIcon />}
              </ControlButton>
            </Controls>
          </Box>
        </Toolbar>
      </Header>

      <Main $themeMode={theme}>
        {/* <LayoutEffectExample /> */}
        <button onClick={() => setShowModal(true)}>SHOW MODAL</button>

        {showModal && (
          <Modal onClose={setShowModal}>
            <h3>This is my Modal</h3>
          </Modal>
        )}
        <Outlet />
      </Main>
    </AppShell>
  )
}

export default MainLayout

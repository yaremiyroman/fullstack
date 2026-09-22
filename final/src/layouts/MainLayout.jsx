import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

import { getUsers, addCurrentUser } from '../slices/usersSlice';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

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

const AUTH_STORAGE_KEY = 'mock_jwt_auth_session';

function MainLayout() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const [authAnchorEl, setAuthAnchorEl] = useState(null);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [authSession, setAuthSession] = useState(null);

  const dispatch = useDispatch();
  const usersData = useSelector(state => state.users.usersData);
  const currentUserData = useSelector(state => state.users.user);

  console.log('currentUserData > ', currentUserData);


  useEffect(() => {
    if (!usersData.length) {
      dispatch(getUsers());
    }


  }, []);

  useEffect(() => {
    const savedSession = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!savedSession) {
      return;
    }

    try {
      dispatch(addCurrentUser(JSON.parse(savedSession)));


      const parsedSession = JSON.parse(savedSession);

      if (parsedSession?.email && parsedSession?.token) {
        setAuthSession(parsedSession);
      }
    } catch {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, []);

  const isAuthMenuOpen = Boolean(authAnchorEl);

  const handleOpenAuthMenu = event => {
    setAuthAnchorEl(event.currentTarget);
  };

  const handleCloseAuthMenu = () => {
    setAuthAnchorEl(null);
    setAuthError('');
  };

  const handleCredentialsChange = event => {
    const { name, value } = event.target;

    setCredentials(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAuthorize = event => {
    event.preventDefault();

    const email = credentials.email.trim();
    const password = credentials.password.trim();

    if (!email || !password) {
      setAuthError('Email and password are required.');

      return;
    }


    const currentUser = usersData.filter(user => user.email === email);

    console.log('currentUser > ', currentUser);

    if (!currentUser) {
      alert('NO USER');

      return;
    }

    dispatch(addCurrentUser(currentUser[0]));


    const simulatedJwt = btoa(`${email}:${Date.now()}:${password.length}`);

    // -------

    // const

    const nextSession = {
      ...currentUser[0],
      token: simulatedJwt,
      issuedAt: new Date().toISOString(),
    };

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextSession));
    setAuthSession(nextSession);
    setCredentials({ email, password: '' });
    setAuthError('');
    setAuthAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setAuthSession(null);
    setCredentials({ email: '', password: '' });
    setAuthError('');
    setAuthAnchorEl(null);
  };

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

              <ControlButton
                $themeMode={theme}
                onClick={handleOpenAuthMenu}
                startIcon={<AccountCircle />}
              >
                {authSession ? authSession.email : 'Authorize'}
              </ControlButton>
              <Menu
                anchorEl={authAnchorEl}
                open={isAuthMenuOpen}
                onClose={handleCloseAuthMenu}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {authSession ? (
                  <Box sx={{ p: 2, width: 320 }}>
                    <Box sx={{ mb: 1, fontSize: '0.9rem', opacity: 0.85 }}>
                      Authorized as: {authSession.email}
                    </Box>
                    <Box sx={{ fontSize: '0.75rem', opacity: 0.7, wordBreak: 'break-all', mb: 2 }}>
                      JWT: {authSession.token}
                    </Box>
                    <Box sx={{ fontSize: '0.75rem', opacity: 0.7, wordBreak: 'break-all', mb: 2 }}>
                      <Link to="/user">User Page</Link>
                    </Box>
                    <Button onClick={handleLogout} variant="contained" fullWidth>
                      Logout
                    </Button>
                  </Box>
                ) : (
                  <Box
                    component="form"
                    onSubmit={handleAuthorize}
                    sx={{ p: 2, width: 320, display: 'flex', flexDirection: 'column', gap: 1.5 }}
                  >
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      value={credentials.email}
                      onChange={handleCredentialsChange}
                      size="small"
                      autoComplete="email"
                      required
                    />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                      value={credentials.password}
                      onChange={handleCredentialsChange}
                      size="small"
                      autoComplete="current-password"
                      required
                    />
                    {authError ? (
                      <Box sx={{ color: 'error.main', fontSize: '0.8rem' }}>{authError}</Box>
                    ) : null}
                    <Button type="submit" variant="contained">Login</Button>
                  </Box>
                )}
              </Menu>
            </Controls>
          </Box>
        </Toolbar>
      </Header>
      <Main $themeMode={theme}>
        <Outlet />
      </Main>
    </AppShell>
  )
}

export default MainLayout

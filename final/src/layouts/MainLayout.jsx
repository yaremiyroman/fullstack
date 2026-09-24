import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import MainMenu from '../components/MainMenu';
import Controls from '../components/Controls';

import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

import { getUsers, addCurrentUser } from '../slices/usersSlice';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { AUTH_STORAGE_KEY } from '../data/constants';

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

const ControlLabel = styled.span`
  font-size: 0.9rem;
  opacity: 0.85;
`;


const Main = styled.main`
  background: ${({ $themeMode }) => ($themeMode === 'night' ? '#111827' : '#ffffff')};
  padding: 0 10px;
  min-height: calc(100vh - 64px);
`;

function MainLayout() {
  const [authAnchorEl, setAuthAnchorEl] = useState(null);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [authSession, setAuthSession] = useState(null);

  const usersData = useSelector(state => state.users.usersData);
  const currentUserData = useSelector(state => state.users.user);

  const { theme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  const dispatch = useDispatch();

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
        backgroundImage: 'none'
      }}>
        <Toolbar sx={{ width: '100%' }}>
          <MainMenu $themeMode={theme} />
          <Controls
            $themeMode={theme}
            openAuthMenuHandler={handleOpenAuthMenu}
            authSession={authSession}
            credentials={credentials}
            authError={authError}
            authAnchorEl={authAnchorEl}
            closeAuthMenuHandler={handleCloseAuthMenu}
            authorizeHandler={handleAuthorize}
            credentialsChangeHandler={handleCredentialsChange}
            logoutHandler={handleLogout}
          />
        </Toolbar>
      </Header>
      <Main $themeMode={theme}>
        <Outlet />
      </Main>
    </AppShell>
  )
}

export default MainLayout

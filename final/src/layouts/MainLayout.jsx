import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { MainMenu, Controls, HeaderLogo } from '../components';

import { useTheme } from '../contexts/ThemeContext';

import { getUsers, addCurrentUser } from '../slices/usersSlice';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { AUTH_STORAGE_KEY } from '../data/constants';
import { BREAKPOINTS, MEDIA_QUERIES } from '../styles/breakpoints';

const AppShell = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${BREAKPOINTS.desktop};
  min-height: 100vh;
  color: ${({ $colors }) => $colors.textPrimary};
  background: ${({ $colors }) => $colors.appBackground};
  transition: background 0.2s ease, color 0.2s ease;

  @media ${MEDIA_QUERIES.tablet} {
    max-width: ${BREAKPOINTS.tablet};
  }

  @media ${MEDIA_QUERIES.phone} {
    max-width: ${BREAKPOINTS.phone};
  }
`;

const Header = styled(AppBar)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderToolbar = styled(Toolbar)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  @media ${MEDIA_QUERIES.tablet} {
    flex-wrap: nowrap;
  }

  @media ${MEDIA_QUERIES.phone} {
    gap: 8px;
  }
`;

const HeaderMenu = styled.div`
  flex: 1;
  min-width: 0;
`;

const HeaderControls = styled.div`
  flex-shrink: 0;
`;

const MOBILE_HEADER_BREAKPOINT = '475px';

const HeaderToolbarLayout = styled(HeaderToolbar)`
  @media (max-width: ${MOBILE_HEADER_BREAKPOINT}) {
    flex-wrap: wrap;
    align-items: flex-start;

    ${HeaderMenu} {
      order: 3;
      flex: 0 0 100%;
      width: 100%;
    }

    ${HeaderControls} {
      margin-left: auto;
    }
  }
`;

const Main = styled.main`
  background: ${({ $colors }) => $colors.surface};
  padding: 0 20px 20px;
  min-height: calc(100vh - 64px);

  @media ${MEDIA_QUERIES.tablet} {
    padding: 0 16px 16px;
  }

  @media ${MEDIA_QUERIES.phone} {
    padding: 0 12px 12px;
  }
`;

function MainLayout() {
  const [authAnchorEl, setAuthAnchorEl] = useState(null);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [authSession, setAuthSession] = useState(null);

  const usersData = useSelector(state => state.users.usersData);
  const { theme, colors } = useTheme();

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

    const currentUser = usersData.find(user => user.email === email);

    if (!currentUser) {
      setAuthError('User with this email was not found.');

      return;
    }

    dispatch(addCurrentUser(currentUser));


    const simulatedJwt = btoa(`${email}:${Date.now()}:${password.length}`);
    const nextSession = {
      ...currentUser,
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
    <AppShell $colors={colors}>
      <Header position="static">
        <HeaderToolbarLayout>
          <HeaderLogo />
          <HeaderMenu>
            <MainMenu $themeMode={theme} />
          </HeaderMenu>
          <HeaderControls>
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
          </HeaderControls>
        </HeaderToolbarLayout>
      </Header>
      <Main $colors={colors}>
        <Outlet />
      </Main>
    </AppShell>
  );
}

export default MainLayout;

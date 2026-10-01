import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { MainMenu, Controls, HeaderLogo, MostViewed } from '../components';

import { useTheme } from '../contexts/ThemeContext';
import { fetchPosts } from '../slices/postsSlice';

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

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 20px;
  align-items: start;

  @media ${MEDIA_QUERIES.tablet} {
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: 16px;
  }

  @media ${MEDIA_QUERIES.phone} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ContentArea = styled.section`
  min-width: 0;

  @media ${MEDIA_QUERIES.phone} {
    order: 2;
  }
`;

const Sidebar = styled.aside`
  min-width: 0;
  position: sticky;
  top: 16px;

  @media ${MEDIA_QUERIES.phone} {
    position: static;
    order: 1;
  }
`;

function MainLayout() {
  const [authAnchorEl, setAuthAnchorEl] = useState(null);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [authSession, setAuthSession] = useState(null);

  const postsData = useSelector(state => state.posts.postsData);
  const isPostsLoading = useSelector(state => state.posts.loading);
  const usersData = useSelector(state => state.users.usersData);
  const { pathname } = useLocation();
  const { theme, colors } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!postsData.length && !isPostsLoading) {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsData.length, isPostsLoading]);

  useEffect(() => {
    if (!usersData.length) {
      dispatch(getUsers());
    }
  }, [dispatch, usersData.length]);

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
  }, [dispatch]);


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

  const isRegistrationPage = pathname === '/register' || pathname.startsWith('/register/');

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
        {isRegistrationPage ? (
          <Outlet />
        ) : (
          <ContentLayout>
            <ContentArea>
              <Outlet />
            </ContentArea>
            <Sidebar>
              <MostViewed />
            </Sidebar>
          </ContentLayout>
        )}
      </Main>
    </AppShell>
  );
}

export default MainLayout;

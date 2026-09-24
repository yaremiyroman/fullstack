import { Outlet, Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';

import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

export default function Controls({
    $themeMode,
    openAuthMenuHandler,
    authSession,
    authAnchorEl,
    authError,
    closeAuthMenuHandler,
    authorizeHandler,
    logoutHandler,
    credentials,
    credentialsChangeHandler
}) {
    const { theme, toggleTheme } = useTheme();
    const { language, changeLanguage, t } = useLanguage();

    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ControlsContainer>
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
                    onClick={openAuthMenuHandler}
                    startIcon={<AccountCircle />}
                >
                    {authSession ? authSession.email : 'Authorize'}
                </ControlButton>

                <Menu
                    anchorEl={authAnchorEl}
                    open={Boolean(authAnchorEl)}
                    onClose={closeAuthMenuHandler}
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
                            <Button onClick={logoutHandler} variant="contained" fullWidth>
                                Logout
                            </Button>
                        </Box>
                    ) : (
                        <Box
                            component="form"
                            onSubmit={authorizeHandler}
                            sx={{ p: 2, width: 320, display: 'flex', flexDirection: 'column', gap: 1.5 }}
                        >
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                value={credentials.email}
                                onChange={credentialsChangeHandler}
                                size="small"
                                autoComplete="email"
                                required
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                value={credentials.password}
                                onChange={credentialsChangeHandler}
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
            </ControlsContainer>
        </Box>
    );
}

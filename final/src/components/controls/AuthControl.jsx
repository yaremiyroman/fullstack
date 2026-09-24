import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { ControlButton } from './ControlButton';

function AuthControl({
  theme,
  authSession,
  authAnchorEl,
  authError,
  credentials,
  openAuthMenuHandler,
  closeAuthMenuHandler,
  authorizeHandler,
  credentialsChangeHandler,
  logoutHandler,
}) {
  return (
    <>
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
    </>
  );
}

export default AuthControl;

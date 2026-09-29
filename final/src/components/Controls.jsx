import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageControls from './controls/LanguageControls';
import ThemeControl from './controls/ThemeControl';
import AuthControl from './controls/AuthControl';

import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ControlsDesktopOnly = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`;

export default function Controls({
  openAuthMenuHandler,
  authSession,
  authAnchorEl,
  authError,
  closeAuthMenuHandler,
  authorizeHandler,
  logoutHandler,
  credentials,
  credentialsChangeHandler,
}) {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <ControlsDesktopOnly>
      <ControlsContainer>
        <LanguageControls
          theme={theme}
          language={language}
          changeLanguage={changeLanguage}
        />
        <ThemeControl theme={theme} toggleTheme={toggleTheme} />
        <AuthControl
          theme={theme}
          authSession={authSession}
          authAnchorEl={authAnchorEl}
          authError={authError}
          closeAuthMenuHandler={closeAuthMenuHandler}
          authorizeHandler={authorizeHandler}
          logoutHandler={logoutHandler}
          credentials={credentials}
          credentialsChangeHandler={credentialsChangeHandler}
          openAuthMenuHandler={openAuthMenuHandler}
        />
      </ControlsContainer>
    </ControlsDesktopOnly>
  );
}

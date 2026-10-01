import styled from 'styled-components';

import { useTheme } from '../contexts/ThemeContext';
import HeaderLogo from './HeaderLogo';
import MainMenu from './MainMenu';
import { BREAKPOINTS, MEDIA_QUERIES } from '../styles/breakpoints';

const FooterRoot = styled.footer`
  margin-top: 20px;
  border-top: 1px solid ${({ $colors }) => $colors.border};
  background: ${({ $colors }) => $colors.surfaceAlt};
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
`;

const FooterInner = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${BREAKPOINTS.desktop};
  margin: 0 auto;
  padding: 16px 20px;

  @media ${MEDIA_QUERIES.tablet} {
    max-width: ${BREAKPOINTS.tablet};
    padding: 14px 16px;
  }

  @media ${MEDIA_QUERIES.phone} {
    max-width: ${BREAKPOINTS.phone};
    padding: 12px;
  }
`;

const FooterMenu = styled.div`
  flex: 1;
  min-width: 240px;
  overflow-x: auto;
`;

const Copyright = styled.small`
  margin-left: auto;
  color: ${({ $colors }) => $colors.textSecondary};

  @media ${MEDIA_QUERIES.phone} {
    width: 100%;
    margin-left: 0;
  }
`;

export default function Footer() {
  const { theme, colors } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <FooterRoot $colors={colors}>
      <FooterInner>
        <HeaderLogo />
        <FooterMenu>
          <MainMenu $themeMode={theme} />
        </FooterMenu>
        <Copyright $colors={colors}>
          &copy; {currentYear} DevNotes. All rights reserved.
        </Copyright>
      </FooterInner>
    </FooterRoot>
  );
}

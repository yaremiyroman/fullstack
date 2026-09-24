import { NavLink } from 'react-router-dom';

import { useLanguage } from '../contexts/LanguageContext';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styled from 'styled-components';

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

export default function MainMenu({ $themeMode }) {
    const { t } = useLanguage();

    return (
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
    );
}

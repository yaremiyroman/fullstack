import styled from 'styled-components';

import logo from '../assets/logo.svg';
import { useTheme } from '../contexts/ThemeContext';

const StyledHeaderLogo = styled.span`
  display: block;
  height: 28px;
  width: calc(28px * 518 / 98);
  margin-right: 16px;
  flex-shrink: 0;
  background-color: ${({ $color }) => $color};
  -webkit-mask-image: url(${logo});
  mask-image: url(${logo});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: left center;
  mask-position: left center;
  -webkit-mask-size: contain;
  mask-size: contain;
`;

export default function HeaderLogo() {
  const { colors } = useTheme();

  return (
    <StyledHeaderLogo
      $color={colors.textPrimary}
      role="img"
      aria-label="devnotes logo"
    />
  );
}

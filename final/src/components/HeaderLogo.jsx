import styled from 'styled-components';

import logo from '../assets/logo.svg';

const StyledHeaderLogo = styled.img`
  display: block;
  width: auto;
  height: 28px;
  margin-right: 16px;
  flex-shrink: 0;
`;

export default function HeaderLogo() {
  return <StyledHeaderLogo src={logo} alt="devnotes logo" />;
}

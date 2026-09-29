import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

import { useTheme } from '../contexts/ThemeContext';
import { getCategoryKeyFromPostValue } from '../utils/categoryUtils';

const Container = styled(Paper)`
  border: 1px solid ${({ $themeMode }) => ($themeMode === 'night' ? '#334155' : '#cbd5e1')};
  background: ${({ $themeMode }) => ($themeMode === 'night' ? '#1e293b' : '#ffffff')};
  padding: 12px;
  margin-bottom: 10px;
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#e2e8f0' : '#0f172a')};
`;

const Title = styled(Link)`
  margin-right: 10px;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#e2e8f0' : '#0f172a')};
  opacity: 0.9;
  transition: opacity 0.15;

  &:hover {
    opacity: 1;
  }
`;

const Author = styled.em`
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#cbd5e1' : '#334155')};
`;

const Description = styled.p`
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#e2e8f0' : '#1e293b')};
  margin: 8px 0;
`;

const CategoryContainer = styled.div`
  color: ${({ $themeMode }) => ($themeMode === 'night' ? '#bfdbfe' : '#1d4ed8')};
`;

const CategoryLink = styled(Link)`
  color: inherit;
`;

const Card = ({ title, description, author, postID, category }) => {
  const { theme } = useTheme();
  const categoryKey = getCategoryKeyFromPostValue(category);

  return (
    <Container $themeMode={theme}>
      <Title to={`/post/${postID}`} $themeMode={theme}>{title}</Title>
      <Author $themeMode={theme}>author #{author}</Author>
      <Description $themeMode={theme}>{description}</Description>
      <CategoryContainer $themeMode={theme}>
        <CategoryLink to={`/category/${categoryKey ?? category}`}>{category}</CategoryLink>
      </CategoryContainer>
    </Container>
  );
};

export default Card;

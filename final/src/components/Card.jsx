import styled from 'styled-components';
import { json, Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

import { useTheme } from '../contexts/ThemeContext';

// Створення стилізованої кнопки
const Container = styled(Paper)`
  border: 1px solid ${({ $themeMode }) => ($themeMode === 'night' ? '#33415550' : '#e2e8f050')};
  padding: 12px;
  margin-bottom: 10px;
  color: #ffffff;
`;

const Title = styled(Link)`
  margin-right: 10px;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.9;
  transition: opacity 0.15;

  &:hover {
    opacity: 1;
  }
`;

const Author = styled.em`
  color: #ffffff;
`;

const Description = styled.p`
  color: #ffffff;
`;

const CategoryContainer = styled.div`
  color: #ffffff;
`;

const CategoryLink = styled(Link)`
  color: #ffffff;
`;

const Card = ({ title, description, author, postID, category }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container sx={{
      backgroundColor: theme === 'night' ? '#33415550' : '#e2e8f050',
    }}>
      <Title to={`/post/${postID}`}>{title}</Title>
      <Author>author #{author}</Author>
      <Description>{description}</Description>
      <CategoryContainer>
        <CategoryLink to={`category/${category}`}>{category}</CategoryLink>
      </CategoryContainer>
    </Container >
  );
};

export default Card;

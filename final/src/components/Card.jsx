import styled from 'styled-components';
import { json, Link } from 'react-router-dom';

// Створення стилізованої кнопки
const Container = styled.div`
  border: 1px solid ${({ $themeMode }) => ($themeMode === 'night' ? '#33415550' : '#e2e8f050')};
  padding: 12px;
  margin-bottom: 10px;
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
`;

const Description = styled.p`
`;


const Card = ({ title, description, author, postID }) => {
  return (
    <Container>
      <Title to={`/post/${postID}`}>{title}</Title>
      <Author>author #{author}</Author>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;

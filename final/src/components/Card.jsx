import styled from 'styled-components';

// Створення стилізованої кнопки
const Container = styled.div`
`;

const Title = styled.h2`
`;

const Author = styled.em`
`;

const Description = styled.p`
`;


const Card = ({ title, description, author }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>author #{author}</Author>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;

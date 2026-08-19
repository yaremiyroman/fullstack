import styled from 'styled-components';

// Створення стилізованої кнопки
const Container = styled.div`
  border: 3px solid red;
  padding: 10px;

  &:hover {
    border-color: green;
  }
`;

const Image = styled.img`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 10px;
`;

export { Container, Image, Title, Description };

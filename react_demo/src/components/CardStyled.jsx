import { Container, Image, Title, Description } from './CardStyles';

const Card = ({ title, description, image }) => {
  return (
    <Container className="card">
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;

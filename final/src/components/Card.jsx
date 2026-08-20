import Button from "./Button";

const Card = ({ title, description }) => {
  return (
    <div>
      <h2 >{title}</h2>
      <p >{description}</p>
      <Button />
    </div>
  );
};

export default Card;

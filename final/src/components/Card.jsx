import Button from "./Button";

const Card = ({ title, description, language }) => {
  return (
    <div>
      <h2 >{title}</h2>
      <p >{description}</p>
      <Button language={language} />
    </div>
  );
};

export default Card;

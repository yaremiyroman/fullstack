import { createUseStyles } from 'react-jss';

// Визначення стилів за допомогою хука
const useStyles = createUseStyles({
  container: {
    padding: '10px 20px',
    background: 'linear-gradient(45deg, blue, red)',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(45deg, red, blue)',
    },
  },
  image: {
    marginBottom: 20
  },
  title: {
    marginBottom: 20
  },
  description: {
    fontSize: 6
  },
});

const Card = ({ title, description, image }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.container} card`}>
      <img src={image} alt={title} className={classes.image} />
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default Card;

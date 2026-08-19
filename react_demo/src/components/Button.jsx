import './Button.css';

function Button({ clickHandler, title = 'Збільшити'}) {
  return (
    <button onClick={clickHandler}>
      {title}
    </button>
  );
};

export default Button;

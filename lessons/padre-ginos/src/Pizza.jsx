let counter;
const Pizza = (props) => {
  counter = Date.now();
  return (
    <div className="pizza">
      <h1>
        {props.name}
        <small>{counter}</small>
      </h1>
      <p>{props.description}</p>
      <img
        src={props.image ? props.image : "https//picsum.photos/200"}
        alt={props.name}
      />
    </div>
  );
};

export default Pizza;

const RandomCoaster = (props) => {
  return (
    <div>
      {props.randomCoaster ? (
        <div className="random-coaster">
          <img
            width="600"
            height="550"
            src={props.randomCoaster.image}
            alt={props.randomCoaster.name}
            className="random-image"
          />
          <div className="randCoaster-text">
            <h1>{props.randomCoaster.name}</h1>
            <h2>{props.randomCoaster.themePark}</h2>
            <h2>Rating: {props.randomCoaster.score}</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RandomCoaster;

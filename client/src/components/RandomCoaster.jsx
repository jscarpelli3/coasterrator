import { Link } from "react-router-dom";

const RandomCoaster = (props) => {
  return (
    <div>
      <div className="coaster-day">
      <h2 className="random-heading">Coaster of the Day!</h2>
      </div>
      {props.randomCoaster ? (
        <Link key={props.randomCoaster.name} to={`/coaster/${props.randomCoaster._id}`}>
        <div className="random-coaster">
          <img
            width="400"
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
        </Link>
      ) : null}
    </div>
  );
};

export default RandomCoaster;

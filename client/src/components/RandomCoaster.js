const RandomCoaster = (props) => {
  return (
    <div>
      {props.randomCoaster ? (
        <div className="random-coaster">
          <div>
            <h1>{props.randomCoaster.name}</h1>
            <h2>{props.randomCoaster.themePark}</h2>
            <h2>Rating: {props.randomCoaster.score}</h2>
          </div>
          <img
            src={props.randomCoaster.image}
            alt={props.randomCoaster.name}
            width="500"
          />
        </div>
      ) : null}
    </div>
  )
}

export default RandomCoaster

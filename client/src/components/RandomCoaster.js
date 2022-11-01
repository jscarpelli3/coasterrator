import { useEffect, useState } from 'react'

const RandomCoaster = (props) => {
  return (
    <div>
      {props.randomCoaster ? (
        <div className="random-coaster">
          <div>{props.randomCoaster.name}</div>
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

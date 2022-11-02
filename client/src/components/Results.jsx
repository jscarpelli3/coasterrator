import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Results = (props) => {

const [ratingResult, setRatingResult] = useState([]);
console.log(props.coasters)



  return (
    <div className="results-content">


      {props.coasters?.map((coaster) => (
        <Link key={coaster.name} to={`/coaster/${coaster._id}`}>
          <div className="result-card" key={coaster._id}>
            <div className="result-image">
              <img src={coaster.image} alt={`${coaster.name}`} />
            </div>
            <div className="result-description">
              <h1>Name: {coaster.name}</h1>
              <h2>Park: {coaster.themePark}</h2>
              <p>Score: {coaster.score}</p>
            </div>

            {/* <hr/> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Results;

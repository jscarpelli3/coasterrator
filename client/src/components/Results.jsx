import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Results = (props) => {
const [ratingResult, setRatingResult] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("score");
    console.log(data);


    const getCoaster = async () => {
      const res = await axios.get(
        `http://localhost:3001/coasters/score/${data}`
      );

      setRatingResult(res.data.coasters);
      console.log(res.data.coasters);
    };
    getCoaster();
  }, []);

  return (
    <div>
{/* 
      {ratingResult?.map((coaster) => (
        // <Link key={coaster.name} to={`/detail/${coaster._id}`>
        <div key={coaster._id}>
          <h1>
            Name: {coaster.name} Park: ({coaster.themePark})
          </h1>
          <p>Score: {coaster.score}</p>
          <img src={coaster.image} alt={`${coaster.name}`} width="200" />
          <hr />
  </div>))} */}
  
        {props.coasters?.map(coaster => (
      <Link key={coaster.name} to={`/coaster/${coaster._id}`}>
        <div className="result-card" key={coaster._id}>
          
            <h1>Name: {coaster.name}</h1>
            <h2>Park: {coaster.themePark}</h2>
            <p>Score: {coaster.score}</p>
            <img className="result-image" src={coaster.image} alt={`${coaster.name}`}/>
            <hr/>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Results;

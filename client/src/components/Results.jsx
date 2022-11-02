import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const Results = (props) => {
  const [ratingResult, setRatingResult] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("score") || "4.7";
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
      {ratingResult?.map((coaster) => (
        // <Link key={coaster.name} to={`/detail/${coaster._id}`>
        <div key={coaster._id}>
          <h1>
            Name: {coaster.name} Park: ({coaster.themePark})
          </h1>
          <p>Score: {coaster.score}</p>
          <img src={coaster.image} alt={`${coaster.name}`} width="200" />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Results;

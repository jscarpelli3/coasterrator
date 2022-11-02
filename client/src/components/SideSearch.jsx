import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import Results from "./Results";


const SideSearch = ({ onClick, handleChange, handleSubmit }) => {
  // const navigate = useNavigate();
  // const initialState = {
  //   score: "",
  // };
  // const [formState, setFormState] = useState(initialState);
  // const handleChange = (event) => {
  //   setFormState({ ...formState, [event.target.id]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   localStorage.setItem("score", formState.score);
  //   navigate("/results");
  //   setFormState(initialState);
  // };

  return (
    <div className="side-search">
      <h4>Show Coasters By Rating:</h4>

      <form id="form" onSubmit={handleSubmit}>
        <select onChange={handleChange} id="score">
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
        <button> View</button>
      </form>
      <h4>Show Coasters By Park:</h4>
      <ul>
        <li onClick={onClick} id="Cedar Point">Cedar Point</li>
        <li onClick={onClick} id="Islands of Adventure">Islands of Adventure</li>
        <li onClick={onClick} id="Carowinds">Carowinds</li>
        <li onClick={onClick} id="Busch Gardens Tampa">Busch Gardens Tampa</li>
        <li onClick={onClick} id="Six Flags Great Adventure">Six Flags Great Adventure</li>
        <li onClick={onClick} id="Dollywood">Dollywood</li>
        <li onClick={onClick} id="Holiday World">Holiday World</li>
        <li onClick={onClick} id="Six Flags Fiesta Texas">Six Flags Fiesta Texas</li>
        <li onClick={onClick} id="Six Flags Magic Mountain">Six Flags Magic Mountain</li>

      </ul>
    </div>
  );
};

export default SideSearch;

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Results from "./Results";
import Detail from "./Detail";
import SideSearch from "./SideSearch";
import RandomCoaster from "./RandomCoaster";
import CoasterForm from "./CoasterForm";
import Stars from "./Stars";


const Main = () => {
  
  const [allCoasters, setAllCoasters] = useState([]);
  const [chosenCoasters, setChosenCoasters] = useState(null);
  const [randomCoaster, setRandomCoaster] = useState(null)
  const navigate = useNavigate()


  const getCoasters = async () => {

      
      const response = await axios.get("http://localhost:3001/coasters");
      setAllCoasters(response.data.coasters);
      let random =
      response.data.coasters[Math.floor(Math.random() * response.data.coasters.length)]
      setRandomCoaster(random)
  };

  useEffect(() => {
    getCoasters();
  }, []);

  const onClick = (evt) => {
    evt.preventDefault()
    const result = allCoasters.filter(coasters => coasters.themePark===evt.target.id);
    setChosenCoasters(result)
    navigate('/results')
  }
  
  
  const handleChange = (event) => {
    event.preventDefault();
    let chosenRating = parseInt(event.target.value)
    const result = allCoasters.filter(coasters => coasters.score===chosenRating);
    setChosenCoasters(result)
    navigate("/results")
  };

  
  return (
    <div className="main">
      <div className="SideSearch">
        <SideSearch onClick={onClick}  handleChange={handleChange}/>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<RandomCoaster randomCoaster={randomCoaster}/>} />
        <Route path="/coasterform" element={<CoasterForm />} />
        <Route
          path="/results"
          element={<Results onClick={onClick} coasters={chosenCoasters} />}/>
        <Route path="/coaster/:id" element={<Detail />} />

      </Routes>
      </div>
    </div>
  );
};

export default Main;

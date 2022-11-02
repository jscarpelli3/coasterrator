import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import Results from "./Results";
import Detail from "./Detail";
import SideSearch from "./SideSearch";
import RandomCoaster from "./RandomCoaster";


const Main = () => {

  const [allCoasters, setAllCoasters] = useState([]);
  const [chosenCoasters, setChosenCoasters] = useState(null);
  const [selectedCoaster, setSelectedCoaster] = useState(null);
  const [randomCoaster, setRandomCoaster] = useState(null)
  const navigate = useNavigate()


  const getCoasters = async () => {

      
      const response = await axios.get("http://localhost:3001/coasters");
      setAllCoasters(response.data.coasters);
      console.log(response.data.coasters);
      let random =
      response.data.coasters[Math.floor(Math.random() * response.data.coasters.length)]
      setRandomCoaster(random)
      console.log(random)

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

  return (
    <div className="main">
      <div className="SideSearch">
        <SideSearch onClick={onClick}/>
      </div>
      <Routes>

        <Route path="/" element={<RandomCoaster randomCoaster={randomCoaster}/>} />


        <Route
          path="/results"
          element={<Results onClick={onClick} coasters={chosenCoasters} />}/>
        <Route path="/coaster" element={<Detail coaster={selectedCoaster} />} />

      </Routes>
    </div>
  );
};

export default Main;

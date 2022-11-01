import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import Results from "./Results";
import Detail from "./Detail";
import SideSearch from "./SideSearch";
// import RandomCoaster from "./RandomCoaster";

const Main = () => {
  const [allCoasters, setAllCoasters] = useState(null);
  const [chosenCoasters, setChosenCoasters] = useState(allCoasters);
  const [selectedCoaster, setSelectedCoaster] = useState(null);
  const navigate=useNavigate()

  const getCoasters = async () => {
    try {
      
      const response = await axios.get("http://localhost:3001/coasters");
      setAllCoasters(response.data.coasters);
      console.log(response);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCoasters();
  }, []);

  const onClick = (evt) => {
    evt.preventDefault()
    const result = allCoasters.filter(coasters => coasters.themePark===evt.target.id);
    // let newRest = {...formState, contributor: "6352d1d1e2832c5fd43ad0e7"}
    // setFormState(initialState)
    navigate('/results')
    console.log(result)
  }

  return (
    <div className="main">
      <div className="SideSearch">
        <SideSearch onClick={onClick}/>
      </div>
      <Routes>
        {/* <Route path="/" element={<RandomCoaster coasters={chosenCoasters}/>} /> */}
        <Route path="/" element={<Detail />} />

        <Route
          path="/results"
          element={<Results onCLick={onClick} coasters={chosenCoasters} />}/>
        // {/* /> */}
        // {/* <Route path="/coaster" element={<Detail coaster={selectedCoaster} />} /> */}

      </Routes>
    </div>
  );
};

export default Main;

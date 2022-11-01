import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import Results from "./Results";
import Detail from "./Detail";
import SideSearch from "./SideSearch";
import RandomCoaster from "./RandomCoaster";

const Main = () => {
  const [allCoasters, setAllCoasters] = useState(null);
  const [chosenCoasters, setChosenCoasters] = useState(null);
  const [selectedCoaster, setSelectedCoaster] = useState(null);

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

  const onClick = () => {};

  return (
    <div className="main">
      <div className="SideSearch">
        <SideSearch />
      </div>
      <Routes>
        <Route path="/" element={<RandomCoaster coasters={allCoasters}/>} />

        <Route
          path="/results"
          element={<Results onCLick={onClick} coasters={allCoasters} setCoasters={setAllCoasters} />}/>
        // {/* /> */}
        // {/* <Route path="/coaster" element={<Detail coaster={selectedCoaster} />} /> */}

      </Routes>
    </div>
  );
};

export default Main;

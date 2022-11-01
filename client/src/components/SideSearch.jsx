import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'

const SideSearch = ({onClick}) => {

const onChange = () => {
  console.log("butttttonn")
}




  return (
    <div className="side-search">
      <h4>Show Coasters By Rating:</h4>
      <div className="radio-buttons" onChange={onChange}>
        <input type="radio" value="1 Star" name="rating" /> 1 Star <br></br>
        <input type="radio" value="2 Stars" name="rating" /> 2 Stars<br></br>
        <input type="radio" value="3 Stars" name="rating" /> 3 Stars<br></br>
        <input type="radio" value="4 Stars" name="rating" /> 4 Stars<br></br>
        <input type="radio" value="5 Stars" name="rating" /> 5 Stars<br></br>
      </div>
      <h4>Showgit ad Coasters By Park</h4>
      <ul>
        <li onClick={onClick} id="Cedar Point">Cedar Point</li>
        <li onClick={onClick} id="Islands of Adeventure">Islands of Adventure</li>
        <li>Carowinds</li>
        <li>Busch Gardens Tampa</li>
        <li>Six Flags Great Adventure</li>
        <li>Dollywood</li>
        <li>Holiday World</li>
        <li>Six Flags Fiesta Texas</li>
        <li>Six Flags Magic Mountain</li>
      </ul>
    </div>
  )
}

export default SideSearch
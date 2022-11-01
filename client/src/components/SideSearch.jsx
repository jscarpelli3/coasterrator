import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'

const SideSearch = () => {

const onChange = () => {
  console.log("butttttonn")
}


  return (
    <div className="side-search">
      <h4>Show Coasters By Rating:</h4>
      <div onChange={onChange}>
        <input type="radio" value="1 Star" name="1 Star" /> 1 Star <br></br>
        <input type="radio" value="2 Stars" name="2 Stars" /> 2 Stars<br></br>
        <input type="radio" value="3 Stars" name="3 Stars" /> 3 Stars<br></br>
        <input type="radio" value="4 Stars" name="4 Stars" /> 4 Stars<br></br>
        <input type="radio" value="5 Stars" name="5 Stars" /> 5 Stars<br></br>
      </div>
      <h4>Showgit ad Coasters By Park</h4>
    </div>
  )
}

export default SideSearch
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'

const SideSearch = () => {
  return (
    <div>
      <h4>Show Coasters By Rating:</h4>
      <div onChange={this.onChangeValue}>
        <input type="radio" value="1 Star" name="1 Star" /> 1 Star
        <input type="radio" value="2 Stars" name="2 Stars" /> 2 Stars
        <input type="radio" value="3 Stars" name="3 Stars" /> 3 Stars
        <input type="radio" value="4 Stars" name="4 Stars" /> 4 Stars
        <input type="radio" value="5 Stars" name="5 Stars" /> 5 Stars
      </div>
      <p>
        <Link to="/">
          <button> Return Home </button>
        </Link>
      </p>
    </div>
  )
}

export default SideSearch
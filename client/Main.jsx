import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'


const Main = () => {
//   const initialState = ''
//   const [searchTerm, setSearchTerm] = useState(initialState)
//   const navigate = useNavigate()



//   const handleChange = (event) => {
//     setSearchTerm(event.target.value)
//   }

// const searchByCity = async (evt) => {
//   evt.preventDefault()
//   try {
//     const response = await axios.get(`/api/restaurants?city=${searchTerm}`)
//     setSearchResults(response.data.rests)
//     console.log(response.data.rests)
//     navigate('/Search')
//   } catch (err) {
//     console.log(err)
//   }
// }



  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/coaster" element={<Detail />} />
      </Routes>
      </div>
  )
}

export default Main
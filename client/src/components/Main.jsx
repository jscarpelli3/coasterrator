import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'
import Search from './Search'
import Results from './Results'
import Detail from './Detail'


const Main = () => {
  const [allCoaster, setAllCoasters] = useState(null)
  const [selectedCoaster, setSelectedCoaster] = useState(null)

  const getCoasters = async () => {
    try {
      const response = await axios.get('/api/all')
      setRests(response.data.rests)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCoasters()
  }, [])

  const onClick = () => {}


  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results" element={<Results onCLick={onClick} coasters={setAllCoasters}/>} />
        <Route path="/coaster" element={<Detail coaster={selectedCoaster}/>} />
      </Routes>
      </div>
  )
}

export default Main
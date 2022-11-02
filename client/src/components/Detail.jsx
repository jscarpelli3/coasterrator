import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Detail = () => {
  const [coaster, setCoaster] =  useState(null)
  let { id } = useParams()

  const getCoasterById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/coaster/${id}`)
    console.log(response.data.coaster)
    setCoaster(response.data.coaster)
  } catch (error){
    console.log(error)
  }
}

  useEffect(() => {
    getCoasterById()
  }, [setCoaster])


  return (
    <div className="detail">
        <h1>{coaster?.name}</h1>
        <img className='coaster-detail-image' src={coaster?.image} />
        <h2>Park Name: {coaster?.themePark}</h2>
        <h3>Highest Point: {coaster?.height}</h3>
        <h3>Largest Drop: {coaster?.largestDrop}</h3>
        <h3>Highest Speed (MPH): {coaster?.speed}</h3>
        <h3>Inversions: {coaster?.inversions}</h3>
        <h3>Score: {coaster?.score}</h3>
      <div>
        <button className="delete-coaster">Delete This Coaster!</button>
      </div>

    </div>
  )
}

export default Detail

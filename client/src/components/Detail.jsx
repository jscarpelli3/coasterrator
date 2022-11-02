import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Stars from './Stars'

const Detail = () => {
  const [coaster, setCoaster] =  useState(null)
  let { id } = useParams()
  let navigate = useNavigate()

  const getCoasterById = async () => {
    try {
      const response = await axios.get(`/api/coaster/${id}`)
    setCoaster(response.data.coaster)
  } catch (error){
    console.log(error)
  }
}

const deleteCoaster = async () => {
  try {
    const response = await axios.delete(
      `/api/coaster/${id}`
    )
    window.alert('You have deleted this roller coaster')
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

let curScore = parseInt(coaster?.score)

  useEffect(() => {
    getCoasterById()
  }, [setCoaster])


  return (
    <div className="detail">
        <h2>{coaster?.name}</h2>
        <img className='coaster-detail-image' src={coaster?.image} />
        <div className="detail-text">
        <h2>Park Name: {coaster?.themePark}</h2>
        <h3>Highest Point: {coaster?.height}</h3>
        <h3>Largest Drop: {coaster?.largestDrop}</h3>
        <h3>Highest Speed (MPH): {coaster?.speed}</h3>
        <h3>Inversions: {coaster?.inversions}</h3><br></br>
        {coaster?.score ? <Stars curScore={curScore} />: undefined}
        <h3>Score: {coaster?.score}</h3>
        </div>
      <div>
        <button onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete ${coaster.name}?`
              )
            ) {
              deleteCoaster()
            }
          }}>Delete This Coaster!</button>
      </div>

    </div>
  )
}

export default Detail

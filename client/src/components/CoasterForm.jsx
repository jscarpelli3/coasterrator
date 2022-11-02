import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const CoasterForm = () => {
  const initialState = {
    name: '',
    themePark: '',
    height: '',
    largestDrop:'',
    steepestAngle:'',
    speed: '',
    inversions: '',
    image: '',
    score: ''
  }

  const [formState, setFormState] = useState(initialState)

  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post(`http://localhost:3001/addcoaster`, formState)
      console.log(response.data.coaster)
      window.alert('You have created your roller coaster!')
      setFormState(initialState)
      navigate('/')
    } catch (error) {
    console.log(error)
  }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form className="coasterform" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input onChange={handleChange} value={formState.name} type="text" id="name"/>
      <label htmlFor="themePark">Theme Park:</label>
      <input onChange={handleChange} value={formState.themePark} type="text" id="themePark"/>
      <label htmlFor="height">Height:</label>
      <input onChange={handleChange} value={formState.height} type="number" id="height"/>
      <label htmlFor="largestDrop">Largest Drop:</label>
      <input onChange={handleChange} value={formState.largestDrop} type="number" id="largestDrop"/>
      <label htmlFor="steepestAngle">Steepest Angle:</label>
      <input onChange={handleChange} value={formState.steepestAngle} type="number" id="steepestAngle"/>
      <label htmlFor="speed">Speed:</label>
      <input onChange={handleChange} value={formState.speed} type="number" id="speed"/>
      <label htmlFor="inversions">Inversions:</label>
      <input onChange={handleChange} value={formState.inversions} type="number" id="inversions"/>
      <label htmlFor="score">Score:</label>
      <input onChange={handleChange} value={formState.score} type="number" id="score"/>
      <label htmlFor="image">Image:</label>
      <input onChange={handleChange} value={formState.image} type="text" id="image" />
      <button type="submit">Add Roller Coaster</button>
    </form>
  )
}

export default CoasterForm
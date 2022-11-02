import Comment from './Comment'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Detail = () => {
  const initialState = { comment: '' }
  const [formState, setFormState] = useState(initialState)
  let { id } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let response = await axios.post('http://localhost:3001/comment', formState)
    setFormState(initialState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="detail">
      <div>
        <h1>Coaster Name</h1>
        <button className="delete-coaster">Delete This Coaster!</button>
      </div>
      {/* <Comment id={id} />
      <div>
        <form className="commentform" onSubmit={handleSubmit}>
          <label htmlFor="comment">Comment</label>
          <textarea
            onChange={handleChange}
            value={formState.comment}
            id="comment"
            cols="20"
            rows="5"
          ></textarea>
          <button type="submit">Add Comment</button>
        </form>
      </div> */}
    </div>
  )
}

export default Detail

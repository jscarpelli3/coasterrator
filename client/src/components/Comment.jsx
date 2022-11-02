import axios from 'axios'


const Comment = (props) =>  {
  // let { id } = props.param.id
  let coasterComments = []

  const getComments = async ()=> {
  // coasterComments = await axios.get(`http://localhost:3001/comments/${id}`)
  }

  getComments()


  return (
    <div>
        {coasterComments.map(comment => (
        <div>
            <h1>Comments: {comment.comment} </h1>
            {/* <button onClick={}>Delete</button> */}
            <hr/>
        </div>
      ))}
    </div>
) 
}

export default Comment
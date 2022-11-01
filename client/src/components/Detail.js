import Comment from './Comment'
import { useParams } from 'react-router-dom'

const Detail = () => {
  let { id } = useParams()

  return (
    <div className="detail">
      <div>
        <h1>Coaster Name</h1>
      </div>
      <Comment id={id} />
    </div>
  )
}

export default Detail

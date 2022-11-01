const Comment = (props) =>  {
  let { id } = props.param.id
  let coasterComments =  props.findById(id).comments

  return (
    <div>
        {coasterComments.map(allComments => (
        <div>
            <h1>Comments: {allComments} </h1>
            <hr/>
        </div>
      ))}
    </div>
) 
}

export default Comment
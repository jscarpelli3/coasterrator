const Results = (props) => {  
  
  return (
    <div>
        {props.coasters?.map(coaster => (
      // <Link key={coaster.name} to={`/detail/${coaster._id}`>
        <div >

            <h1>Name: {coaster.name}  Park: ({coaster.themePark})</h1>
            <p>Score: {coaster.score}</p>
            <img className="result-image" src={coaster.image} alt={`${coaster.name}`}/>
            <hr/>
            
        </div>

      ))}
    </div>
)


}

export default Results
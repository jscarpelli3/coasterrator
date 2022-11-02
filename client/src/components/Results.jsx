const Results = (props) => {  
  
  return (
    <div>
        {props.coasters?.map(coaster => (
      // <Link key={coaster.name} to={`/detail/${coaster._id}`>
        <div key={coaster._id}>

            <h1>Name: {coaster.name}</h1>
            <h2>Park: {coaster.themePark}</h2>
            <p>Score: {coaster.score}</p>
            <img className="result-image" src={coaster.image} alt={`${coaster.name}`}/>
            <hr/>
            
        </div>

      ))}
    </div>
)


}

export default Results
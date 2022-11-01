const Results = (props) => {  
  
  return (
    <div>
        {props.coasters?.map(coaster => (
        <div key={coaster.name}>

            <h1>Name: {coaster.name}  Park: ({coaster.themePark})</h1>
            <p>Score: {coaster.score}</p>
            <img src={coaster.image} alt={`${coaster.name}`} width="200"/>
            <hr/>
        </div>
      ))}
    </div>
)


}

export default Results
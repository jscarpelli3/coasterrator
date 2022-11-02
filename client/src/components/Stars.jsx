import { useState, useEffect } from "react";

const Stars = ({curScore}) =>  {
  const [score, setScore] = useState(curScore)

console.log(score)

// useEffect(() => {
//   let newScore = parseInt({curScore})
//   console.log(newScore)
//   setScore(newScore)
// }, [])


const onClick = (evt) => {
let newScore = parseInt(evt.target.id)
setScore(newScore)
}




  return (
    <div>
<span id="1" className={score>=1 ? "on" : "off"} onClick={onClick}>&#9733;</span>
<span id="2" className={score>=2 ? "on" : "off"} onClick={onClick}>&#9733;</span>
<span id="3" className={score>=3 ? "on" : "off"} onClick={onClick}>&#9733;</span>
<span id="4" className={score>=4 ? "on" : "off"} onClick={onClick}>&#9733;</span>
<span id="5" className={score>=5 ? "on" : "off"} onClick={onClick}>&#9733;</span>
    </div>
) 
}

export default Stars
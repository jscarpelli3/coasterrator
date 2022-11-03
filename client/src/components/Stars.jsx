import { useState, useEffect } from "react";
import axios from 'axios' 

const Stars = ({curScore, coaster}) =>  {
  const [score, setScore] = useState(curScore)
  let initialState= {name: coaster.name, themePark: coaster.themePark, height: coaster.height, largestDrop: coaster.largestDrop, steepestAngle: coaster.steepestAngle, speed: coaster.speed, inversions: coaster.inversions, image: coaster.image, score: coaster.score, comments: coaster.comments}
  const [curData, setCurData] = useState(initialState)


const onClick = (evt) => {
let newScore = parseInt(evt.target.id)
setScore(newScore)
setCurData({...curData, score: newScore})
axios.put(`/api/updatescore/${coaster?._id}`, curData)
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
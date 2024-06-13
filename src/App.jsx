import { useState } from 'react'

function App() {
  const moveList = [
    '/acro-poses/backfly.png', 
    '/acro-poses/bicepStand.png', 
    '/acro-poses/bird.png', 
    '/acro-poses/boxBalance.png', 
    '/acro-poses/footToHand.png',
    '/acro-poses/shinToHand.png', 
    '/acro-poses/shoulderToShoulder.png',
    '/acro-poses/stradleBalance.png',
  ]
  const [theMove, setTheMove] = useState("/acro-poses/starter.png") 
  const [track, setTrack] = useState(null);
  const rendonNum = () => Math.floor(Math.random() * moveList.length)
  const randomPick = () => {
     
    let index = rendonNum();

    if (track !== index) {
      setTheMove(moveList[index])
      setTrack(index)
    } else {
      randomPick();
    }
  } 

  return (
    <div className="font-roboto">
     <h1>Acro Move</h1>  
     <button onClick={randomPick}>new move</button> 
     <div>
      <img src={theMove}/>
     </div>
     
    </div>
  )
}

export default App

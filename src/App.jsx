import { useState } from 'react'
// import backfly from '/acro-poses/backfly.png'
// import bicepStand from '/acro-poses/bicepStand.png'
// import bird from '/acro-poses/bird.png'
// import boxBalance from '/acro-poses/boxBalance.png'
// import footToHand from '/acro-poses/footToHand.png'
// import shinToFoot from '/acro-poses/shinToFoot.png'
// import sholderToShoulder from '/acro-poses/sholderToShoulder.png'
// import stradleBalance from '/acro-poses/stradleBalance.png'



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
  
  const randomPick = () => {
     
    let index =  Math.floor(Math.random() * moveList.length)
    let lastIdx = index;
    if (lastIdx == index)
    setTheMove(moveList[index]);

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

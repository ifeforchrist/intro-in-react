import React from 'react'

const Game = (props) => {
 

    
    
  return (
    <div>
      <h1>Guessing Game</h1>
      <h3>Welcome {props.playerName} you have {props.maxAttempts} tries</h3>
      <h4>{props.options}</h4>
      <button>guess</button>
    
    </div>
  )
 }

export default Game
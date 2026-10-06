// Props are Input you PASS IN parent to child
// it is a  Read-only function parameters
// Used to make component reusable
// Parent
<GuessingGame playerName="Ife" maxAttempts={3} />

// Child
function GuessingGame(props){
  return <h1>Welcome {props.playerName}</h1>

}
function GuessingGame({ playerName, maxAttempts }){
  return <h1>Welcome {playerName}, you have {maxAttempts} tries</h1>
}
// You CANNOT change props inside the child. If playerName is "Ife", you can't do props.playerName to"Tobi".





// State are Data that CHANGES inside component
import { useState } from 'react';

function GuessingGame({ maxAttempts }){
  // state
  const [guess, setGuess] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [message, setMessage] = useState("Guess a number");

  function handleGuess(){
    setAttempt(attempt + 1)
    if(guess == 50) setMessage("You won 🎇")
    else setMessage("Too low!")
  }

  return (
    <div>
      <p>{message} - Attempt {attempt}/{maxAttempts}</p>
      <input value={guess} onChange={e => setGuess(e.target.value)} />
      <button onClick={handleGuess}>Guess</button>
    </div>
  )
}


const electronics = [
  {id:1, name: "laptop", price: 5000},
   {id:1, name: "laptop", price: 5000},
    {id:1, name: "laptop", price: 5000}

]
let result = electronics.filter((product) => product)


function generteOtp(){
  let otp = Math.floor(Math.random() * 1000000)
  return otp
}
console.log(generteOtp());

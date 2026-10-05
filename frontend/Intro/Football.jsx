import React from 'react'

export const Football = () => {
    const shoot = () =>{
        alert("Goal.....")
    }
  return (
    <>

    <button onClick={shoot}>Click</button>
    <button onClick={()=> {alert("Offside")}}>Send</button>

    </>
  )
}
import React from 'react'
import Car from '../../Intro/Car'
import DestructureCar  from '../DestructureCar'
import  Football  from '../../Intro/Football'
import Game from './Game'



 const App = () => {
  return (
  //  <div>
  //    <Navbar/>
 //     <Body/>
 //   </div>
 <>
   <Car name = "mercedes" brand = "Gle" model = {63}/>
   <Car name = "bmw" brand = "" model = {56}/>
   
   <Football/>
  
   
   
   
  </>
   
  )
}
export default Football
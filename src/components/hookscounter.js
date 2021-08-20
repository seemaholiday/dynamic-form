import React, { useState } from 'react'

const Functioncounter = () => {
    const [counter, setCounter] =  useState(0)

   const increament = () =>{
    setCounter(counter + 10)
   }
   const decreament = () =>{
    setCounter(counter - 10)
   }

        return (
            <div>
                Function
                {/* <button onClick={()=> setCounter(counter+5)}>Increament</button>
                <button onClick={()=> setCounter(counter-5)}>Decreament</button>
                 */}
                  <button onClick={increament}>Increament</button>
                <button onClick={decreament}>Decreament</button>

               <div>{counter}</div>
            </div>
        )
}
export default Functioncounter;
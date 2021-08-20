import React, {useEffect, useState} from 'react'

export default function LifeCycle() {
    const [inc, setInc] = useState(0)
    const [dec, setDec] = useState(20)

    useEffect(() => {
     
       if(inc) {
        console.log("I am Increament")
       }
    }, [])

    useEffect(() => {
        console.log("I am Decreament")
     }, [dec])

     useEffect(() => {
        console.log("I am call at every render and update")
     })

    const increament = () => {
        setInc(inc+1)
    }
    const decreament = () => {
        setDec(dec-1)
    }

    return (
        <div>
            <h1>{inc}</h1>
            <button onClick={increament}>Increament</button>
            <h1>{dec}</h1>
            <button onClick={decreament}>Decreament</button>
        </div>
    )
}

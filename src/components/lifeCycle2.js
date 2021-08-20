import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function LifeCycle2() {
    const [state, setstate] = useState([])
   
    useEffect(() => {
        axios.get('https://dummy.restapiexample.com/api/v1/employees').then(result =>{
            console.log("result", result)
            if(result.status === 200){
                setstate(result.data.data)
            } else{
                console.log("No Data")
            }
        }).catch(error => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
       alert("hello How are you")
    }, [state])
    
    return (
        <div>
            {
                console.log("state", state)
            }
            <table style={{border:'1px solid #dddddd'}}>
                <tr>
                    <th>Emp Name</th>
                    <th>Emp Salary</th>
                    <th>Emp Age</th>
                </tr>
               
                {
                    state.map( data => {
                        return(
                            <tr>
                                <td>
                                    {data.employee_name}
                                </td>
                                <td>
                                    {data.employee_salary}
                                </td>
                                <td>{data.employee_age}</td>
                            </tr>  
                        )
                    })
                }
                 
            </table>
           
               
        </div>
    )
}

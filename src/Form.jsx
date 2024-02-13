import {useState} from 'react'
function Form()
{
    const [data,setData] = useState("")
    const [name,setName] = useState("Aishwarya")
    return(
        <div>
            <h1>Login Form</h1>
            <input type="text" placeholder='Enter userName here' value={data} onChange={(e)=>setData(e.target.value)}/>
            <br/>
            <br/>
            <h1>{name}</h1>
            <button onClick={()=>setName("Updated Name")}> Update the data</button>
            <br/>
        </div>
    )
}

export default Form;
import {useState} from 'react'
function Form()
{
    const [data,setData] = useState("")
    return(
        <div>
            <h1>Login Form</h1>
            <input type="text" placeholder='Enter userName here' value={data} onChange={(e)=>setData(e.target.value)}/>
            <br/>
            <br/>
        </div>
    )
}

export default Form;
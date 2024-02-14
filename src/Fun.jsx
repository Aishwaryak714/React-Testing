import { useState } from "react";

export default function Fun()
{
    const [data,setData] = useState("");

    const handleData = () =>{
        setData("Hello");
    }

    return(
        <div>
            <h1>Functional Component</h1> 
            <button data-testid="btn1" onClick={handleData}>Update</button>
            <h2>{data}</h2>
        </div>
    )
}
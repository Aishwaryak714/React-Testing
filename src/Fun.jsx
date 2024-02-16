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
            <input type="text" defaultValue="Hello" disabled role="textbox"/>
            <button>Click Me</button>
            <button>Update</button>
            <button>Submit</button>

            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            
        </div>
    )
}


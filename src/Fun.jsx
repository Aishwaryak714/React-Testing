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
            <label htmlFor="user-name">Username:</label>
            <input type="text" defaultValue="Hello"  id="user-name" disabled role="textbox"/>
            <button>Click Me</button>
            <button>Update</button>
            <button>Submit</button>

            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>

            <label htmlFor="skills">Skills</label>
            <input type='checkbox' id="skills"/>

            <input type="text" placeholder="Enter username"/>

            <div data-testid="div-test-id">
                Testing with Test ID
            </div>

            <h2 data-testid="h2-test-id">
                H2tag testing id
            </h2>
            
        </div>
    )
}


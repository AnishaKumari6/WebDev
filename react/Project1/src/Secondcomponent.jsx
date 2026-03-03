import React ,{useState}from "react";

function Greet(props){
    const toUpper=()=>{
                console.log("Uppercase was clicked!");
        }
    const tUpper=()=>{
                console.log("Uppercase was clicked!");
        }
    const[text,setText]=useState("Enter your text...")
    return(
        
        <div>
            <h1>{props.heading}-{text}</h1>
            <div>
            <label htmlFor="mybox" className='form-label' onChange={tUpper}></label>
            <textarea className="form-control" id="mybox" rows="3" value={text} name="text"/>
            </div>
            <button className="btn btn-primary" onClick={toUpper}>Convert to uppercase</button>

        </div>
    )
}
export default Greet;
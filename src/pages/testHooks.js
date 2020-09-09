import React, { useState } from "react";

function TestHooks(){
    const[count,setCount] = useState(100);
    const[statevar1,setStateVar1] = useState("Initialvalue")
    const[statevar2,setStateVar2] = useState("check");
    return(<div>
        <h1>{count}</h1>
        <h3>{statevar1}</h3>
        <h2>{statevar2}</h2>
        <button onClick={()=>setCount(count + 10)}>
        Count on</button>
        <button onClick={() => setStateVar1(statevar1 + "Strng concat")}>{statevar1}</button>
        <button onClick={() => setStateVar2("holds value"+statevar2)}>{statevar2}</button>
        </div>)

}


export default TestHooks;

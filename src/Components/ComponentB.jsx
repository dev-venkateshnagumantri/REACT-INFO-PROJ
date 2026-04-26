import React, { useContext } from "react";
import ComponentC from "./ComponentC.jsx";
import { UserContext } from "./ComponentA.jsx";

function ComponentB(){
    return(
        <div className='box'>
            <h2>Component B</h2>
            <ComponentC />
        </div>
    )

}

export default ComponentB
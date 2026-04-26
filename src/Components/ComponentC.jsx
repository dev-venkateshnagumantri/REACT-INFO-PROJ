//useContext Practice

import React from "react";
import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

function ComponentC(){
    const user = useContext(UserContext) //this is child component so we have to unpack it here
    return (
        <div className='box'>
            <h2>Component C</h2>
            <h2>Bye {user}!</h2>
        </div>
    )
}

export default ComponentC
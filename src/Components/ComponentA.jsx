
//useContext Practice
import React from "react";
import ComponentB from "./ComponentB.jsx";
import { createContext } from "react";
//import createContext and create your context here.
export const UserContext = createContext();

function ComponentA(){
    
    const user = "Venkat";
    return(
        <div className='box'>
            <h2>Component A</h2>
            <h2>Hi {user}!</h2>
            <UserContext.Provider value={user}> {/*Pack them for child classes and we can use it in any child classe we want*/}
                <ComponentB/>
            </UserContext.Provider>
            
        </div>
    )
}

export default ComponentA
import React from "react";
import { useState } from "react";

function ArrayCard(){
    const [fruits, setFruits] = useState([])
    const [newFruit, setNewFruit] = useState("");

    const addFruit = ()=>{
        if (newFruit.trim() !== ""){
            setFruits((fruits) => ([...fruits, newFruit]));
            console.log("Fruit added:", newFruit);
            setNewFruit("");
        }
    };

    const deleteFruit = (index)=>{
        console.log("Fruit getting deleted:", fruits[index]);
        setFruits(fruits.filter((_,i)=>i!==index));
        console.log("Fruit successfully deleted !")

    };

    const listItems = fruits.map(
        (fruit, index)=><li className="existingFruits" key={index} onClick={()=>deleteFruit(index)}>{fruit}</li>
    );

    

    return(
        <div>
            <h1>My Favourite Fruits are 👇</h1>
            <ul>
                {listItems}
                <li className="newFruit">{newFruit}</li>
            </ul>

            <input type="text" value={newFruit} onChange={(event)=>setNewFruit(event.target.value)} />
            <br />
            <button onClick={addFruit}>add fruit</button>
        </div>
    );


}

export default ArrayCard;
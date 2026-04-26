import React, { useState } from "react";

function ObjectCard(){
    const [bikes, setBikes] = useState([]);
    const [newBikeName, setNewBikeName] = useState("");
    const [newBikeModel, setNewBikeModel] = useState("");
    const [newBikePrice, setNewBikePrice] = useState(10000);

    const listItems = bikes.map(
        (bike, index)=> {
            return <li key={index}><span>{bike.name} {bike.model} {bike.price} </span>
            <button className="delete-button" onClick={()=>deleteObj(index)}>Delete</button>
        </li>
        }
        
    );
    
    //console.log("New Bike name, model and price are", newBikeName, newBikeModel, newBikePrice);
    function addObj(){
        if (document.getElementById("bikeName").value!=="" && newBikeModel!=="" && newBikePrice!=0){ //document.getElementById("bikeName").value is optional, it's recommened to use newBikeName
            setBikes((bikes)=>[...bikes,{name:newBikeName, model: newBikeModel, price: newBikePrice}]);
            console.log("New Bike added:",newBikeName, newBikeModel, newBikePrice);
            setNewBikeName("");
            setNewBikeModel("");
            setNewBikePrice(10000);
        }
    }

    function deleteObj(index){
        console.log("Deleting the bike:", bikes[index])
        setBikes(bikes.filter((_,i)=>i!=index))
        console.log("Bike successfully got deleted!")
    }

    return(
        <div>
            <h1>My Favourite Bikes are 👇</h1>
            <ol>
                {listItems}
            </ol>

            <input id="bikeName" type="text" onChange={(e)=>setNewBikeName(e.target.value)} value={newBikeName} placeholder="Enter Bike Name" /> <br/>
            <input type="text" onChange={(e)=>setNewBikeModel(e.target.value)} value={newBikeModel} placeholder="Enter Bike Model"/> <br />
            <input type="number" onChange={(e)=>setNewBikePrice(e.target.value)} value={newBikePrice} placeholder="Enter Bike Price"/><br />
            <button className="submit-button" onClick={addObj}>Submit</button>

        </div>
    );

}

export default ObjectCard;
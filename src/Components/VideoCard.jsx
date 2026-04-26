import React from "react";
import { useState, useEffect } from "react";

//useState practice
function VideoCard(){

    const videos = ["Video1", "Video2", "Video3"]
    const videoName = "Thunderbolts"
    const [likes, setvideolikes] = useState(455)
    const [colour, setColour] = useState("blue")
    useEffect(
        ()=>{
            console.log("Likes:",likes);
            document.title=`Likes:${likes}`;
        },[likes]
    )
    return (         
                <div>
                    <h3 style={{color:colour}}>{videoName}</h3>
                    <h4> Likes: {likes}</h4>
                    <button onClick={()=>{
                        setColour(colour=> colour?"green":"red");
                        setvideolikes(likes=>likes+1);
                        }}>Like 👍</button>
                    <button onClick = {()=>{
                        setColour(colour=> colour?"red":"green");
                        setvideolikes(likes=>likes-1);
                    }}>DisLike 👎</button>
                    {
                        (likes>=460) ? <p>Wowww! people love your video.</p> : <p>Good Video !</p>
                    }
                </div>  
        
    )
}

export default VideoCard
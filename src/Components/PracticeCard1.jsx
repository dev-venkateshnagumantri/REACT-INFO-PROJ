import React from "react";
import { useState, useEffect, useRef } from "react";

//useRef practice
function PracticeCard(){
    const [likes, setLikes] = useState(0);
    const refobj = useRef(0);
    const inputRef = useRef(null);
    useEffect(()=>{
        console.log("PracticeCard Rendered ");
        console.log("Likes: ",likes);
    }) //executes everytime when this Component rendered

    useEffect(()=>{
        console.log("PracticeCard Rendered on mount");
    },[]) //executes only when this Component mounted

    return(
        <div>
            <h2>{refobj.current}</h2>
            <button onClick={()=>{
                refobj.current = refobj.current+1;
                console.log(refobj.current);
            }}>
                Click Me
            </button>
            <button onClick={()=>{
                setLikes(refobj.current);
            }}>
                Show
            </button>
            <br />
            <br />
            <input ref={inputRef}/>
            <button onClick={()=>{
                inputRef.current.focus();
                inputRef.current.style.backgroundColor="blue"
                console.log(inputRef.current.value)
            }}>
                Click Me to see magic !
            </button>
        </div>
    )
}


export default PracticeCard
import React from "react";
import { useState } from "react"

function OnChangePr(){
    const [movie,setMovie] = useState({title:"Bahubali", hero:"Prabhas", year:2017});
    //console.log(movie)
    return(<div>
        <h1>Movie: {movie.title} {movie.hero} {movie.year}</h1>

        <input type="text" value={movie.title} onChange={
            (event)=>{
                setMovie(
                    movie=>(
                    {...movie, title:event.target.value}
                )
            )
            }
            } 
            placeholder="Enter Title" />
        <br />
        <input type="text" value={movie.hero} onChange={
            (event)=>{
                setMovie(
                    movie=>(
                    {...movie, hero:event.target.value}
                )
            )
            }
            } 
            placeholder="Enter Hero name" />
        <br />
        <input type="number" value={movie.year} onChange={
            (event)=>{
                setMovie(
                    movie=>(
                    {...movie, year:event.target.value}
                )
            )
            }
            } 
            placeholder="Enter Year of release" />
    </div>)


}

export default OnChangePr
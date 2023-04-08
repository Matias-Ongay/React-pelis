import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import{ Card }from "../components/Card";
import "../components/conteinerCard.css";
export function ConteinerCard() {
  const[movies,SetMovies] =useState([])
  useEffect(()=>{
    get("/discover/movie").then((data)=>{
      SetMovies(data.results);
      console.log(data);
    });
  },[]);
  return(
    <ul className="container">
      {movies.map((movie)=>(
       <Card key={movie.id} movie={movie}></Card>
      ))}
    </ul>
  )
}

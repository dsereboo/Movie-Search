import React, { useState } from "react"
import MovieCard from "./MovieCard"

function SearchMovies(){
  const [query,setQuery]=useState("")  
  const [movies, setMovies]=useState([])

  const searchMovies=async (event)=>{
    event.preventDefault()  
    


   const url=`https://api.themoviedb.org/3/search/movie?api_key=9792c9ff06ab5855484e80198649eb4c&language=en-US&query=${query}&page=1&include_adult=false`;
   try{
       const response= await fetch(url)
       const data= await response.json()
       setMovies(data.results)
        }
    catch(err){
        console.error("Err")
    }
  } 

  const handleChange=(event)=>{
      setQuery(event.target.value)
  }
  

  return(
      <div>
        <form className="form" onSubmit={searchMovies}>
            <div className="form-group">
                <label htmlFor="query">Movie Search</label>
                <input type="text" name="query" 
                placeholder="i.e Jurassic Park" value={query} onChange={handleChange}className="form-control"/>
                <button className="btn btn-block" type="submit" >Search</button>
                
            </div>
        </form>
        <div className="col-md-offset-1 col-md-10">
            {movies.filter(movie=> movie.poster_path).map(movie=>(
                <MovieCard movie={movie}/>
            ))}
        </div>
        </div>
  )  
}

export default SearchMovies
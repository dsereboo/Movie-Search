import React from "react"

function MovieCard(props){
    const {movie}=props
    return(
        <div key={movie.id} className="thumbnail">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + "poster"}/>
                    <div className="caption">
                        <h3>{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p>PLOT: {movie.overview}</p>
                    </div>
        </div>
    )
}
export default MovieCard
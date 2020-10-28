import React from 'react';
import "./MovieCard.css";
import RatingStars from '../RateStars/Rateing';
export default function MovieCards({movie , rate}) {
    return (
        <div>
            <div className="movie_card" id="bright">
  <div className="info_section">
  <img className="locandina" alt="back" id='style' src={movie.Image}/>
    <div className="movie_header">
      
    <h1>{movie.Title}</h1>
    <h4>{movie.Actors}</h4>
    <p className="type">{movie.Genres}</p>
    <br/>
    <p className="type"> <RatingStars rate={rate}  /> </p>
    </div>
    <br/>
    <div className="movie_desc">
      <p className="text">
      {movie.Description} 
      </p>
    </div>
    
  </div>
  <div className="blur_back bright_back"></div>
</div>


        </div>
    )
}

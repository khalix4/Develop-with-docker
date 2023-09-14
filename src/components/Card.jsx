import React, { useState } from 'react'; 
import './Card.css'

function Card(movie){
    let image_path="https://image.tmdb.org/t/p/w500";
    console.log(movie.info);
    let rating=movie.info.vote_average;
    let rottenTomatoes=rating * 10;
    
    const [heartColor, setBackgroundColor] = useState('#9CA3AF');

  const handleClick = () => {
    setBackgroundColor('red');
  };
    return(           
        
        
                <div className="movieCard" data-testid="movie-card">
                    <div className="poster">
                        <img src={image_path+movie.info.poster_path} alt="" width="250" height="370" data-testid="movie-poster"/>
                        <img src="src/Icons/heart.svg" alt="" className="heart" onClick={handleClick} style={{backgroundColor:heartColor}}/>
                    </div>
                    
                    <p className="releaseDate" data-testid="movie-release-date">{movie.info.release_date}</p>
                    <p className="movieTitle" data-testid="movie-title">{movie.info.title}</p>
                    <div className="rating">
                        <div className="imdb ">
                            <img src="src/Icons/IMDB.png" alt=""/>
                            {movie.info.vote_average}/10
                        </div>
                        <div className="rottenTomatoes">
                            <img src="src/Icons/tomato.png" alt="" />
                            {rottenTomatoes}%
                        </div>
                    </div>
                </div>

    

        )
}

export default Card;
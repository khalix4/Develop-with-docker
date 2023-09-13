import React from 'react'
import './Card.css'

function Card(movie){
    let image_path="https://image.tmdb.org/t/p/w500";
    
    
    return(           
        
        
                <div class="movieCard" data-testid="movie-card">
                    <div class="poster">
                        <img src={image_path+movie.info.poster_path} alt="" width="250" height="370" data-testid="movie-poster"/>
                        <img src="src/Icons/heart.svg" alt="" class="heart"/>
                    </div>
                    
                    <p class="releaseDate" data-testid="movie-release-date">{movie.info.release_date}</p>
                    <p class="movieTitle" data-testid="movie-title">{movie.info.title}</p>
                    <div class="rating">
                        <div class="imdb ">
                            <img src="src/Icons/IMDB.png" alt=""/>
                            86.0/100
                        </div>
                        <div class="rottenTomatoes">
                            <img src="src/Icons/tomato.png" alt="" />
                            97%
                        </div>
                    </div>
                    <p class="movieGenre">{movie.info.genre}</p>
                </div>

    

        )
}

export default Card;
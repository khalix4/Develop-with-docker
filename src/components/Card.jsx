import React from 'react'
import './Card.css'

function Card(){
    return(           
        
            <div class="movieList">
                <div class="movieCard">
                    <div class="poster">
                        <img src="src/Icons/dining.jpeg" alt="" width="250" height="370"/>
                        <img src="src/Icons/heart.svg" alt="" class="heart"/>
                    </div>
                    
                    <p class="releaseDate">USA,2018 -Current</p>
                    <p class="movieTitle">Stranger Things</p>
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
                    <p class="movieGenre">Action,Adventure,Horrow</p>
                </div>

            </div>

        )
}

export default Card;
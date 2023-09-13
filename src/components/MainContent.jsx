import { useEffect, useState } from "react";
import Card from "./Card.jsx"
import "./MainContent.css"

let API_KEY='d6c287e55b74adf5812bec5fad23e8b0';
let url='https://api.themoviedb.org/3/movie/popular?api_key='+API_KEY;
function MainContent(){
    const[movieData,setData]=useState([]);
    const [urlset,setUrl]=useState(url);

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setData(data.results))
        .catch("Error fetching from API")
    },[urlset])

    // let dataResult=data.results;
    const top10Movies = movieData.slice(0, 10);

    
    return(
        <div className="mainContent">
            <div className="movieHeading">
                <h2>Featured Movie</h2>
                <a href="">See More </a>
            </div>
           <div className="movieList">
           {top10Movies.length === 0 ? (
            <p style={{ textAlign: "center" }}><i>"No movies found"</i></p>
            ) : (
            top10Movies.map((result, index) => (
                <Card info={result} key={index} />
            ))
            )
        }
           </div>
            
        </div>
    )
}
export default MainContent;
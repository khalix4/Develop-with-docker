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
    let top10Movies = movieData.slice(0, 10);
    return(
        <div className="mainContent">
            <div className="movieHeading">
                <h2>Featured Movie</h2>
                <a href="">See More </a>
            </div>

            if(top10Movies.length==0){
                <p style={{textAlign:"center"}}><i>"No movies found"</i></p>

            }
            else{
                top10Movies.map((result,index)=>{
                    return(
                    <Card info={result} key={index}/>)
                })
            }
            <Card/>
        </div>
    )
}
export default MainContent;
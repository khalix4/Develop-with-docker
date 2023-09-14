import SideBar from "./SideBar.jsx"
import MovieContent from "./MovieContent.jsx"
import './MovieDetails.css'
function MovieDetails(){
    return(
        <div className="container">
            <SideBar/>
            <MovieContent/>
        </div>
        
    )
}
export default MovieDetails
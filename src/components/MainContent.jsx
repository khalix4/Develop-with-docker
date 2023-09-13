import Card from "./Card.jsx"
import "./MainContent.css"
function MainContent(){
    return(
        <div className="mainContent">
            <div class="movieHeading">
                <h2>Featured Movie</h2>
                <a href="">See More </a>
            </div>

            <Card/>
        </div>
    )
}
export default MainContent;
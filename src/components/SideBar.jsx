import "./SideBar.css"
function SideBar(){
    return(
        <div className="sidebar">
            <div className="logo">
                <img src="src/Icons/tv.png" alt="" />
                <p>MovieBox</p>
            </div>

            <div className="categories">
                <div className="category">
                    <img src="src/Icons/Home.svg" alt="" />
                    <p>Home</p>
                </div>

                <div className="category movie">
                    <img src="src/Icons/MovieProjector.svg" alt="" />
                    <p>Movies</p>
                </div>

                <div className="category">
                    <img src="src/Icons/TVshow.svg" alt="" />
                    <p>TV Series</p>
                </div>

                <div className="category">
                    <img src="src/Icons/Calendar.svg" alt="" />
                    <p>Upcoming</p>
                </div>
            </div>

            <div className="movieQuiz">
                <h3>Play movie quizes and earn<br></br> free tickets</h3>
                <p>50K people are playing now</p>
                <a href="">Starting playing</a>
            </div>

            <div className="logout">
                <img src="./src/Icons/Logout.svg" alt="" />
                <p>Logout</p>
            </div>
        </div>

    )
}

export default SideBar
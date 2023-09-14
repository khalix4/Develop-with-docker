import "./MovieContent.css";

function MovieContent() {
  return (
    <div className="movie-content">
      <div className="movie2" style={{ position: "relative" }}>
        <img src="./src/Icons/main.png" alt="" />
        <div className="trailer">
          <img src="./src/Icons/play.png" alt="" width={50} />
          <p>Watch Trailer</p>
        </div>
      </div>

      <div className="movieInfo">
        <div className="left">
          <p className="movieTitle" data-testid="movie-title">
            Top Gun:Maverick
          </p>
          <p className="releaseDate" data-testid="movie-release-date">
            2022
          </p>
          <p className="runTime" data-testid="movie-runtime">
            2h 10m
          </p>
        </div>

        <div className="rating">
          <img src="./src/Icons/Star.png" alt="" />
          <p className="rating">8.5 </p>
          <p className="ratingCount">350k</p>
        </div>
      </div>

      <div className="overviewSection">
        <p className="overview" data-testid=" movie-overview">
          After thirty years, Maverick is still pushing the envelope as a top
          naval aviator, but must confront ghosts of his past when he leads TOP
          GUN's elite graduates on a mission that demands the ultimate sacrifice
          from those chosen to fly it.
        </p>

        <div className="buttons">
          <button>
            <img src="./src/Icons/Twotickets.png" alt="" />
            <p>See Showtimes</p>
          </button>

          <button>
            <img src="./src/Icons/List.png" alt="" />
            <p>More watch options</p>
          </button>
        </div>
      </div>

      <div className="movieDetails">
        <div className="cast">
          <p>
            Director:<span className="castName">Joseph Kosinski</span>
          </p>
          <p>
            Writers:<span className="castName">Jim Cash,Hash Epps</span>
          </p>
          <p>
            Stars: <span className="castName">Tom Cruise</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default MovieContent;

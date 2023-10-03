import React from 'react'
import './Header.css'
import NavBar from './NavBar'

function Header(){
    return(
        <>
            <section className="header" >
               <NavBar/>
                <div className="text">
                    <h1>John Wick 3:<br/>Parabellum</h1>
                    <div className="rating">
                        <div className="imdb2">
                            <img src="/Icons/IMDB.png" alt=""/>
                            86.0/100
                        </div>
                        <div className="rottenTomatoes2">
                            <img src="/Icons/tomato.png" alt="" />
                            97%
                        </div>
                    </div>
                    <p className="paragraph">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    <button>
                        <img src="/Icons/play.png" alt=""/>
                        <p>WATCH TRAILER</p>
                    </button>
                </div>
                </section>
        </>
    )
    
}
export default Header
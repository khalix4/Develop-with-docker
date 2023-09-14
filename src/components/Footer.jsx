import "./Footer.css"
function Footer(){
    return(
        <footer>
            <div className="socialLinks">
                <img src="src/Icons/facebook.svg" alt="" />
                <img src="src/Icons/instagram.svg" alt="" />
                <img src="src/Icons/twitter.svg" alt="" />
                <img src="src/Icons/youtube.svg" alt="" />
            </div>

            <div className="extraInfo">
                <p>Conditions of Use</p>
                <p>Privacy&Policy</p>
                <p>Press Room</p>
            </div>

            <p className="copyright">
                
                © 2023 MovieBox by Eniola Anishe Olumide.
            </p>
        </footer>
    )
}
export default Footer
import { Link } from "react-router-dom"
import './App.css'
function Footer(){
    return (
        <div className="footer">
            <center><img src="./logo2.png" alt="" id="footerlogo"/> </center>
            <div className="global">
                <div className="immo">
                    <h3>IMMOMARCHE</h3>
                    < div className="links"> 
                    <Link to="/" className='link'>appartement a casablanca</Link>
                    <Link to="/" className='link'>appartement a casablanca</Link>
                    <Link to="/" className='link'>appartement a casablanca</Link>
                    <Link to="/" className='link'>appartement a casablanca</Link>
                    <Link to="/" className='link'>appartement a casablanca</Link>
                    </div>
                    <div className="sm">
    <a href="https://www.facebook.com/" className="F"><img src="/images/face.png" id="icon"/></a>
    <a href="https://twitter.com/" className="t"><img src="/images/insta.png" id="icon"/></a>
    <a href="https://www.instagram.com/" className="i"><img src="/images/whatssap.png" id="icon"/></a>
    <a href="https://www.youtube.com/" className="y"><img src="/images/tele.png" id="icon"/></a>
</div>
                </div>
                 
                <div className="Contact">
                     <h3>CONTACTE NOUS</h3>
                    <form>
                        <label>Email</label><br />
                        <input type="email" id="footerEmail"/>
                        <button id="footerbutton">envoyer</button><br />
                        <label>Message</label><br />
                        <textarea id="textarea"></textarea>
                    </form> 
                </div>
                
                <div className="plus">
                    <h3>Plus</h3>
                    < div className="links2"> 
                    <Link to="/B" className='link2'>Accueil</Link>
                    <Link to="/" className='link2'>Accueil</Link>
                    <Link to="/" className='link2'>Accueil</Link>
                    <Link to="/" className='link2'>Accueil</Link>
                    <Link to="/" className='link2'>Accueil</Link>
                    </div>
                    </div>

            </div>
            <div className="bas">
                <p>all rights reserved</p>
            </div>
        </div>
    )

}
export default Footer; 

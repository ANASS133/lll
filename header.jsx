import { Link } from "react-router-dom"

function Header(){
    
    return (
        <div className='header'>
        <img src='logo.png' alt='' className='img' ></img>
        <div  className='nav'>
            <Link to="/acceuil" className='link'>Accueil</Link>
            <Link to="/topics" className='link'>Notre services</Link>
           <Link to="/" className='link'>Annonce</Link>
            <Link to="/publish" className='link'>publish</Link>
            <Link to="/login" className='link ' ><button className='conx'>connecter</button></Link>
            <button className='btn-nav ferme' >
                 </button>
        </div>
        <button className='btn-nav '></button> 
        
        </div>
    )
}
export default Header;  

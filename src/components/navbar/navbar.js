import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../navbar/navbar.css";
import acharyaaLogo from '../Logo/acharyaaLogo.png';


function Navbar(){
    const navRef = useRef();
    const showNavbar =() => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
        <header>
            <div>
            <a href="/Home"><img src={acharyaaLogo} alt="Logo"/></a>
            </div>
            
            
            <div className="buta">
            <nav ref={navRef}>
                <a href="/home">HOME</a>
                <a href="/aboutus">ABOUT US</a>
                <a href="/services">SERVICES</a>
                <a href="/contactus">CONTACT US</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            </div>
            <button onClick={showNavbar} className="nav-btn">
                <FaBars/>
            </button>
        </header>
    );
}



export default Navbar;
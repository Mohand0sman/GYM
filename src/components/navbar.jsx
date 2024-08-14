import  { useState } from "react";
import logo from "../images/logo.png";

function NavBar() {
    const [nav,setnav] = useState(false);
    const changeBack = ()=> {
        if(window.screenY >= 50 ) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBack);
    return (
        <nav className={nav ? "nav active" : "nav"}>
            <a href="main" className="logo">
                <img src={logo} alt=""/>
            </a>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon">

                </span>
            </label>
            <ul className="menu">
                <li><a href="main" >Header</a></li>
                <li><a href="features" >Features</a></li>
                <li><a href="presentaion" >Dffer</a></li>
                <li><a href="about" >About</a></li>
                <li><a href="conatct" >Conatct</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;
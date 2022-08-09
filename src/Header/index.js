
import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <div class="nav">
            <div class="nav-links">
                <Link to='/'>Home </Link>
                <Link to='/Favorites' >Favorites</Link>
            </div>
        </div>
    )
}


export default Header

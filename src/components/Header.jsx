import React from "react";
//import { menuItems } from "../menuItems";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header(){
return(
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Weroute
        </Link>
        <Navbar />
      </div>
    </header>

)
}

export default Header;
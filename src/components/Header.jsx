import React from "react";
//import { menuItems } from "../menuItems";
import Navbar from "./Navbar";

function Header(){
return(
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Weroute
        </a>
        <Navbar />
      </div>
    </header>

)
}

export default Header;
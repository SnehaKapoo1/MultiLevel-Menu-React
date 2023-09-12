import React, {useState} from "react";
import Dropdown from "./Dropdown";

function MenuItems({items, depthLevel}){
 
    const [dropdown, setDropdown] = useState(false);

    return(
        <li className="menu-items">
      {items.submenu ? (
        <>
          <button type="button" aria-expanded = {dropdown ? "true" : "false"}
          onClick={() => setDropdown((preValue) => !preValue)} >
            {items.title}{' '}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown 
          depthLevel = {depthLevel} 
          submenus={items.submenu} 
          dropdown = {dropdown}
          
          />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
    )

}

export default MenuItems;
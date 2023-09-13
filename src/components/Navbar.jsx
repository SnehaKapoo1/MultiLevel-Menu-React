import React from "react";
import { menuItems } from "../menuItems";
//import Dropdown from 'react-bootstrap/Dropdown';
import MenuItems from "./MenuItems";

function Navbar(){
  
return(
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
)
}

export default Navbar;


// import React from "react";
// import { menuItems } from "../menuItems";
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

// function Navbar(){
// return(
//     <nav>
//       <ul className="menus">
//         {menuItems.map((menu, index) => {
//           return (
//             <li className="menu-items" key={index}>
//               <DropdownButton
//             as={ButtonGroup}
//             key={index}
//             id={`dropdown-variants-${index}`}
//             // variant={variant.toLowerCase()}
//             title={menu.title}
//           >
//             {/* <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//             <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//             <Dropdown.Item eventKey="3" active>
//               Active Item
//             </Dropdown.Item> */}
//             <Dropdown.Divider />
//             {/* <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
//           </DropdownButton>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
// )
// }

// export default Navbar;
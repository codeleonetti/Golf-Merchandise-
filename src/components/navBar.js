import React from 'react';



const NavBar = () => {
    return (
        <nav className="navBar">
            <a className="nav-link active" aria-current="page" href="#">Home Page</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
     );
}
 
export default NavBar;
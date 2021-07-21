import React from 'react';




const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="nav-link active" aria-current="page" href="/">Home Page</a>
            <a className="nav-link" href="/merchandiselist">The Merchandise</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>
        
           
        
     );
}
 
export default NavBar;

{/* <div className="navBar">
            <NavLink to="/">Home</NavLink>|
            <NavLink to="/merchandiseList"> All Products </NavLink>|
        </div> */}
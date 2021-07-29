import React from 'react';




export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a className="nav-link active" aria-current="page" href="/">Home Page</a>
                <a className="nav-link" href="/merchandiselist">The Merchandise</a>
                <a className="nav-link" href="/components/aboutus">About Us</a>
                
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
               
            </div>
        </nav>
        
           
        
     );
}
 



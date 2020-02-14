import React from 'react';

const NavBar = () => {

    return(
        <div>
            <nav className="blue">
                <div className="container nav-wrapper">
                <a href="#!" className="brand-logo">My Pets</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#!">Dog</a></li>
                    <li><a href="#!">Cat</a></li>
                    <li><a href="#!">Others</a></li>
                </ul>
                </div>
            </nav>
        
        </div>
    )
}

export default NavBar;
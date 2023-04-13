import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles/NavBar.css';


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
             <NavLink to="/">home</NavLink>
                </li>

                <li>
             <NavLink to="/test">test</NavLink>
                </li>

                <li>
             <NavLink to="/About">about</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header()
{
    return (
        <div className='main-header'>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/counter"><li>Counter</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/calculator"><li>Calculator</li></Link>
                <Link to="/pokemon"><li>Pokémon API</li></Link>
            </ul>
        </div>
    );
}

export default Header;
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeNav = () => setClick(false);
    return (
        <>
            <nav className="navbar"></nav>
            <div className="navbar-container"></div>
            <Link to="/" className="navbar-logo">
                Logo
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
            </div>
            <ul>
                <li className='nav-items'>
                    <Link to='/' className='nav-links' onClick={closeNav}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/Pet-Parent' className='nav-links' onClick={closeNav}>
                        Pet Parent
                    </Link>
                </li>
                <li>
                    <Link to='/Pet-Sitter' className='nav-links' onClick={closeNav}>
                        Pet Sitter
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar

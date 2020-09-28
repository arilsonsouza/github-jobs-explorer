import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => (
    <header className='header py-1 w-full'>
        <nav className='navbar w-full'>
            <Link to='/' className='navbar_brand'>
                <h1>
                    <b>Github</b> Jobs
                </h1>
            </Link>
        </nav>
    </header>
);

export default Navbar;
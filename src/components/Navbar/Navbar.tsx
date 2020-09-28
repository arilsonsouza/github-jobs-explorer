import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

import githubLogo from '../../assets/images/github-logo.png';

const Navbar = () => (
    <header className='header py-1 flex justify-between'>
        <nav className='navbar'>
            <Link to='/' className='navbar_brand'>                
                <b>Github</b> Jobs                
            </Link>
        </nav>
        <a
            href='https://github.com/arilsonsouza/github-jobs-explorer'
            className='github_logo'
            target='_blank'
            rel='noopener noreferrer'>
            <img src={githubLogo} alt="Github"/>
        </a>
    </header>
);

export default Navbar;
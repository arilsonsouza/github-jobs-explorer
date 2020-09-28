import React from 'react';

import './footer.scss';

const Footer = () => (
    <footer id='footer' className='w-full flex align-center justify-center'>
        <span>
            arilson&nbsp;&copy;&nbsp;
            <a
                href='https://devchallenges.io'
                target='_blank'
                rel='noopener noreferrer'>
                DevChallenges.io
            </a>
        </span>
    </footer>
);

export default  Footer;
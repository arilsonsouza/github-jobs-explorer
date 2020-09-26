import React from 'react';

import { Searchbar, Filters } from '../../components';

import './home.scss'

const Home = () => (
    <div className='home'>
        <Searchbar/>
        <div className='flex flex-wrap py-2'>
            <div className='filter_wrapper'>
                <Filters/>
            </div>
            <div className="jobs">
                JOBS
            </div>
        </div>
    </div>
);

export default Home
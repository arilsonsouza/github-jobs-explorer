import React from 'react';

import { Input } from '../';
import './searchbar.scss';

const Searchbar = () => (
    <div className='searchbar w-full flex justify-center align-center'>
        <form className='w-full flex justify-center'>
            <div className='searchbar_input flex'>            
                <Input
                    icon='work_outline'
                    placeholder='Title, companies, expertise or benefits'/>
                <button className='btn'>
                    Search
                </button>
            </div>
        </form>
    </div>
);

export default Searchbar;
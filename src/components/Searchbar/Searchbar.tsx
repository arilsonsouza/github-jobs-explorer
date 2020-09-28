import React, { useState } from 'react';

import { Input } from '../';
import './searchbar.scss';

const Searchbar = ({ handleSubmit }: { handleSubmit(query: string): void }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onSubmit = (evt:  React.FormEvent<HTMLFormElement>): void => {
        evt.preventDefault();
        handleSubmit(searchQuery);
        setSearchQuery('');
    };

    return (
        <div className='searchbar w-full flex justify-center align-center'>
            <form
                onSubmit={(e) => onSubmit(e)}
                className='w-full flex justify-center'>
                <div className='searchbar_input flex'>            
                    <Input
                        handleChange={evt => setSearchQuery(evt.currentTarget.value)}
                        handleOnKeyUp={() => {}}
                        value={searchQuery}
                        icon='work_outline'
                        placeholder='Title, companies, expertise or benefits'/>
                    <button className='btn'>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Searchbar;
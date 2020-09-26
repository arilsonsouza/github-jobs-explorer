import React, { useState } from 'react';

import { Filter, Input } from '../';

import './filters.scss';

const locations = [
    'Amsterdam',
    'Berlin',
    'London',
    'New York',
];

const Filters = () => {
    const [fullTime, setFullTime] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleChange = (evt:  React.FormEvent<HTMLInputElement>): void => {
        console.log('evt: ', evt.currentTarget.value); 
        if (evt.currentTarget.name === 'full-time') {
            setFullTime(!fullTime);
            return;
        }
        setSelectedLocation(evt.currentTarget.value);
    };

    return (
        <div className='filters'>
            <Filter
                type='checkbox'
                name='full-time'
                label='Full time'
                value={fullTime}
                selectedValue={fullTime}
                handleChange={(e) => handleChange(e)}
            />
            <div className="location_wrapper">
                <div className="location_input">
                    <span>Location</span>
                    <div>
                        <Input
                            icon='public'
                            placeholder='City, state, zip code or country'/>
                    </div>
                </div>
                
                <div className="location_list">
                    {locations.map((location, index) => 
                        <div className="location_item" key={index}>
                            <Filter
                                type='radio'
                                name='location'
                                label={location}
                                value={location}
                                selectedValue={selectedLocation}
                                handleChange={(e) => handleChange(e)}
                            />
                        </div>                
                    )}
                        
                </div>
            </div>      
        </div>
    )
};

export default Filters;
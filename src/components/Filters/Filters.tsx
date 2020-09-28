import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setIsFullTime, setSelectedLocation } from '../../actions';
import { Filter, Input } from '../';
import { rootState } from '../../types';

import './filters.scss';


const Filters = () => {    

    const locations = useSelector((state: rootState) => state.filter.locations);
    const isFullTime = useSelector((state: rootState) => state.filter.isFullTime);
    const selectedLocation = useSelector((state: rootState) => state.filter.selectedLocation);


    const dispatch = useDispatch();

    const handleChange = (evt:  React.FormEvent<HTMLInputElement>): void => {        
        if (evt.currentTarget.name === 'full-time') {
            dispatch(setIsFullTime(!isFullTime));
            return;
        }
        dispatch(setSelectedLocation(evt.currentTarget.value));
    };

    return (
        <div className='filters'>
            <Filter
                type='checkbox'
                name='full-time'
                label='Full time'
                value={isFullTime}
                selectedValue={isFullTime}
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
                    {locations.map((location: string, index: number) => 
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
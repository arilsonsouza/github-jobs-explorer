import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setIsFullTime, setSelectedLocation, updateLocations } from '../../actions';
import { Filter, Input } from '../';
import { rootState } from '../../types';

import './filters.scss';


const Filters = ({ handleFilter }: { handleFilter(filters: object): void}) => {    

    const [location, setLocation] = useState('');
    const locations = useSelector((state: rootState) => state.filter.locations);
    const isFullTime = useSelector((state: rootState) => state.filter.isFullTime);
    const selectedLocation = useSelector((state: rootState) => state.filter.selectedLocation);

    const dispatch = useDispatch();

    const handleChange = (evt:  React.FormEvent<HTMLInputElement>): void => {
        let {name, value}: {name: string, value: (string|boolean) } = evt.currentTarget;        
        
        if (name === 'full_time') {
            value = !value         
            dispatch(setIsFullTime(value));
        } else {
            dispatch(setSelectedLocation(value));
        }
        handleFilter({ [name]: value});

    };

    const handleOnKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>): void => {                
        if (evt.key === 'Enter') {
            addLocation()
        }    
    };

    const addLocation = (): void => {
        if (location) {
            dispatch(updateLocations([...locations, location]));
            setLocation('');
        }
    };

    return (
        <div className='filters'>
            <Filter
                type='checkbox'
                name='full_time'
                label='Full time'
                value={isFullTime}
                selectedValue={isFullTime}
                handleChange={(e) => handleChange(e)}
            />
            <div className="location_wrapper">
                <div className="location_input">
                    <span>Location</span>
                    <div className='flex align-center w-full'>
                        <Input                            
                            handleChange={(evt) => setLocation(evt.currentTarget.value)}
                            handleOnKeyUp={handleOnKeyUp}
                            value={location}
                            icon='public'
                            placeholder='City, state, zip code or country'/>
                        <button
                            type='button'
                            onClick={addLocation}
                            className='btn btn--small'
                        >
                            <i className="material-icons">add</i>
                        </button>
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
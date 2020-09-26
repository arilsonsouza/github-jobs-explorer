import React from 'react';
import PropTypes from 'prop-types'

import './filter.scss';

const Filter = (
    { type, label, name, value, selectedValue, handleChange }: 
    { type: string, label: string, name: string, value: any, selectedValue: any, handleChange(event: React.FormEvent<HTMLInputElement>): void }
) => {
    return (
        <label className='input_label'>
            <input
                type={type}
                // eslint-disable-next-line no-restricted-globals
                name={name}
                value={value}
                checked={value ? value === selectedValue : value}
                onChange={evt => handleChange(evt)}
            />
            {label}
        </label>
    );
};

Filter.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.bool.isRequired,
        PropTypes.string.isRequired,
    ]),    
    selectedValue: PropTypes.oneOfType([
        PropTypes.bool.isRequired,
        PropTypes.string.isRequired,
    ]),    
};

export default Filter;
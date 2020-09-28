import React from 'react';
import PropTypes from 'prop-types'

import './input.scss';

const Input = (
    {value, icon, placeholder, handleChange, handleOnKeyUp}:
    {value: any, icon?: string, placeholder?: string, handleChange(evt: React.FormEvent<HTMLInputElement>): void, handleOnKeyUp(evt: React.KeyboardEvent<HTMLInputElement>): void }) => {    

    return (
        <div className='input_wrapper flex align-center w-full'>
            <i className="material-icons md-dark md-inactive">{icon}</i>
            <input
                className='w-full h-full input'
                placeholder={placeholder}
                type='text'
                value={value}
                onChange={(e) => handleChange(e)}
                onKeyUp={handleOnKeyUp}
            />
        </div>
    );
};

Input.propTypes = {
    icon: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default Input;
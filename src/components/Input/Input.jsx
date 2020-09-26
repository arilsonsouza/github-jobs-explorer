import React from 'react';

import './input.scss';

const Input = ({ icon, placeholder }) => {
    return (
        <div className='input_wrapper flex align-center'>
            <i className="material-icons md-dark md-inactive">{icon}</i>
            <input
                className='w-full h-full input'
                placeholder={placeholder}
                type='text'/>
        </div>
    );
};

export default Input;
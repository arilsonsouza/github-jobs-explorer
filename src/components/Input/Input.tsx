import React from 'react';
import PropTypes from 'prop-types'

import './input.scss';

const Input = ({ icon, placeholder }: { icon: string, placeholder: string }) => {
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

Input.propTypes = {
    icon: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default Input;
import React from 'react';

import './loading.scss';

const Loading = () => (
    <div className='loading flex align-center justify-center'>
        <div className='lds-spinner'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Loading;
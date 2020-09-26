import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../routes';

const App = () => (
    <div className='app'>
        <Router>
            <Routes/>
        </Router>
    </div>
);

export default App;
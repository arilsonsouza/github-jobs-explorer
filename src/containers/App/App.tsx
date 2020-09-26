import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../../routes';
import store from '../../store';

import { Navbar } from '../../components';

const App = () => (
    <Provider store={store}>
        <div className='app container'>
            <Navbar/>
            <Router>
                <Routes/>
            </Router>
        </div>
    </Provider>
);

export default App;
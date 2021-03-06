import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../../routes';
import store from '../../store';

import { Navbar, Footer } from '../../components';

const App = () => (
    <Provider store={store}>
        <div className='app container'>
            <div className='px-1'>
                <Router>
                    <Navbar/>
                    <Routes/>
                    <Footer/>
                </Router>
            </div>
        </div>
    </Provider>
);

export default App;
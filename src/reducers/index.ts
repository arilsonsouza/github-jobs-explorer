import { combineReducers } from 'redux';

import appReducer from './app';

const appReducers = combineReducers({
    app: appReducer
});

export default appReducers;
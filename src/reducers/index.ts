import { combineReducers } from 'redux';

import appReducer from './app';
import jobReducer from './job';
import filterReducer from './filter';

const appReducers = combineReducers({
    app: appReducer,
    job: jobReducer,
    filter: filterReducer
});

export default appReducers;
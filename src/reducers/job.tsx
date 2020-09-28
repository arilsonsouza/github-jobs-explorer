import { jobConstants } from '../constants';

import { actionProperties, jobInitialState } from '../types';

const initialState = {
    jobs: []    
}

const jobReducer = (state: jobInitialState = initialState, action: actionProperties ) => {
    const { type, payload } = action;
    switch(type) {
        case jobConstants.SET_JOBS:
            const jobs = [...state.jobs, ...payload];
            state.jobs = jobs;
        break
    }

    return state
}

export default jobReducer;
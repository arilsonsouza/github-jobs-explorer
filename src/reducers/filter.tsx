import { filterConstants } from '../constants';

import { filterInitialState, actionProperties} from '../types';

const initialState = {
    isFullTime: true,    
    locations: [
        'Amsterdam',
        'Berlin',
        'London',
        'New York',
    ]
}

const filterReducer = (state: filterInitialState = initialState, action: actionProperties ) => {
    const { type, payload } = action;
    switch(type) {
        case filterConstants.SET_IS_FULL_TIME:            
            state.isFullTime = payload;
            break
        case filterConstants.SET_SELECTED_LOCATION:
            state.selectedLocation = payload
        break
        
    }

    return state
}

export default filterReducer;
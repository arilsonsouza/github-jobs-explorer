import { createStore } from 'redux';

import appReducers from '../reducers';

const rootReducer = (state: any, action: any) => appReducers(state, action)
const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
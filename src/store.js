import * as Redux from 'redux';

import rootReducer from './reducers/rootReducer';
import * as SystemStates from './const/systemStates';


export const defaultState = {
    systemState: SystemStates.IDLE,
    sessionLength: 25 * 60,
    breakLength: 5 * 60,
    currentTime: 25 * 60
};

export const store = Redux.createStore(rootReducer, defaultState, Redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
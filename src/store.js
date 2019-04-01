import * as Redux from 'redux';

import rootReducer from './reducers/rootReducer';
import * as SystemStates from './const/systemStates';


export const defaultState = {
    systemState: SystemStates.IDLE,
    sessionLength: 5 * 60,
    breakLength: 60,
    currentTime: 5 * 60
};

export const store = Redux.createStore(rootReducer);
import {defaultState} from '../store';
import * as ActionTypes from '../const/actionTypes';
import * as SystemStates from '../const/systemStates';


export default function rootReducer(state = defaultState, action){
    let newState = Object.assign({}, state);

    switch(action.type){
        case ActionTypes.START_STOP_CLICKED:
            switch(newState.systemState){
                case SystemStates.IDLE:
                    newState.systemState = SystemStates.SESSION;
                    break;
                case SystemStates.SESSION:
                    newState.systemState = SystemStates.SESSION_PAUSE;
                    break;
                case SystemStates.SESSION_PAUSE:
                    newState.systemState = SystemStates.SESSION;
                    break;                
                case SystemStates.BREAK:
                    newState.systemState = SystemStates.BREAK_PAUSE;
                    break;
                case SystemStates.BREAK_PAUSE:
                    newState.systemState = SystemStates.BREAK;
                    break;
                default:
                    break;
            }
            return newState;

        case ActionTypes.RESET:
            return defaultState;

        case ActionTypes.UPDATE_SESSION_LENGTH:
            newState.sessionLength += parseInt(action.value);
            return newState;

        case ActionTypes.UPDATE_BREAK_LENGTH:
            newState.breakLength += parseInt(action.value);
            return newState;

        case ActionTypes.TICK:
            newState.currentTime --;
            return newState;

        default:
            return state;
    }
}
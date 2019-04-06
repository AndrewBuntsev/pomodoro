import {defaultState} from '../store';
import * as ActionTypes from '../const/actionTypes';
import * as SystemStates from '../const/systemStates';
import { StopBeep } from '../beepController';


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
            StopBeep();
            return defaultState;

        case ActionTypes.UPDATE_SESSION_LENGTH:
            if (newState.systemState !== SystemStates.SESSION && newState.systemState !== SystemStates.BREAK){
                newState.sessionLength += parseInt(action.value);
                if (newState.systemState === SystemStates.IDLE || newState.systemState === SystemStates.SESSION_PAUSE){
                    newState.currentTime = newState.sessionLength;
                }
            }
            return newState;

        case ActionTypes.UPDATE_BREAK_LENGTH:
            if (newState.systemState !== SystemStates.SESSION && newState.systemState !== SystemStates.BREAK){
                newState.breakLength += parseInt(action.value);
                if (newState.systemState === SystemStates.BREAK_PAUSE){
                    newState.currentTime = newState.breakLength;
                }
            }
            return newState;

        case ActionTypes.TICK:
            if (newState.currentTime === 0){
                if (newState.systemState === SystemStates.SESSION){
                    newState.systemState = SystemStates.BREAK;
                    newState.currentTime = newState.breakLength;
                }
                else if (newState.systemState === SystemStates.BREAK){
                    newState.systemState = SystemStates.SESSION;
                    newState.currentTime = newState.sessionLength;
                }
            }
            else{
                newState.currentTime --;
            }
            return newState;

        default:
            return state;
    }
}
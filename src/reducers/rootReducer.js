import {defaultState} from '../store';


export default function rootReducer(state = defaultState, action){
    switch(action.type){
        case 'dd':
            break;

        default:
            return state;
    }
}
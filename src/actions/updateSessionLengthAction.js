import * as ActionTypes from '../const/actionTypes';

export const updateSessionLengthAction = value => ({
    type: ActionTypes.UPDATE_SESSION_LENGTH,
    value: value
});
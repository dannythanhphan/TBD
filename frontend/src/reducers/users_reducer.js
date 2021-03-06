import { RECEIVE_LOBBY, REMOVE_LOBBY } from '../actions/lobby_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            newState[action.payload.user.id] = action.payload.user;
            return newState;
            
        case RECEIVE_LOBBY:
            return action.payload.users;
    
        case REMOVE_LOBBY:
            return {};

        case RECEIVE_USER_LOGOUT:
            return {};

        default:
            return state;
    }
};

export default usersReducer;
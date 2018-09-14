import constants from '../constants'

const initialState = {
    players: [{}, {}, {}, {}],
    error: undefined
};

export default (state=initialState, action) => {
    switch (action.type){
        case constants.game.SET_PLAYER:
            if (action.hasOwnProperty('type')) delete action.type;
            return Object.assign({}, state, {...action});
        case constants.game.RESET:
            return Object.assign({}, initialState);
        default:
            return state
    }
}
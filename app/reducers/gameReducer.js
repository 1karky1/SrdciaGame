import constants from '../constants'

const initialState = {
    players: [{name: 'Hrac 1'}, {name: 'Hrac 2'}, {name: 'Hrac 3'}, {name: 'Hrac 4'}],
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
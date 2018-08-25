import constants from '../constants'

//actions for players could be SET_PLAYERS, RENAME_PLAYER
const initialState = {
    players: []

};

export default (state=initialState, action) => {
    switch (action.type){
        case constants.game.TEST:
            return Object.assign({}, state, {...action});
        default:
            return state
    }
}
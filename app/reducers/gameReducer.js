import constants from '../constants'

const initialState = {
    players: [{name: 'Hrac 1'}, {name: 'Hrac 2'}, {name: 'Hrac 3'}, {name: 'Hrac 4'}],
    rounds: [],
    error: undefined
};

export default (state=initialState, action) => {
    switch (action.type){
        case constants.game.SET_PLAYER:
            state.players[action.playerIndex].name = action.playerName;
            return Object.assign({}, state, {players: state.players.slice()});
        case constants.game.ADD_ROUND:
            state.rounds.push(action.round);
            return Object.assign({}, state, {rounds: state.rounds.slice()});
        case constants.game.RESET:
            return Object.assign({}, initialState);
        default:
            return state
    }
}
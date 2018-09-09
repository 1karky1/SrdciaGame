import constants from '../constants'

//actions for players could be SET_PLAYERS, RENAME_PLAYER
const initialState = {
    players: [
        {
            name: 'marek',
            games: {1: 10},
            points: []
        },
        {
            name: 'martin',
            points: []
        },
        {
            name: 'miso',
            points: []
        },
        {
            name: 'miro',
            points: []
        },
    ]

};

export default (state=initialState, action) => {
    switch (action.type){
        case constants.game.TEST:
            return Object.assign({}, state, {...action});
        default:
            return state
    }
}
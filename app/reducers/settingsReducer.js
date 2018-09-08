import constants from '../constants'

const initialState = {
    playersCount: constants.settings.PLAYERS_COUNT,
    heartPoints: constants.settings.HEART_POINTS,
    acornQueenPoints: constants.settings.ACORN_QUEEN_POINTS,
    greenQueenPoints: constants.settings.GREEN_QUEEN_POINTS
};

export default (state=initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}
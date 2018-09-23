import constants from '../constants'

export const setPlayer = (playerIndex, playerName) => {
    return {
        type: constants.game.SET_PLAYER,
        playerName: playerName,
        playerIndex: playerIndex
    }
};

export const addRound = (round) => {
    return {
        type: constants.game.ADD_ROUND,
        round: round
    }
};

export const resetGame = () => {
    return {
        type: constants.game.RESET
    }
};


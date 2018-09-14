import constants from '../constants'

export const setPlayer = (index, players = [], newPlayerName) => {
    players[index].name = newPlayerName;
    return {
        type: constants.game.SET_PLAYER,
        players: players
    }
};

export const resetGame = () => {
    return {
        type: constants.game.RESET
    }
};


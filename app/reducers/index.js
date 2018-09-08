import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import navigationReducer from './navigationReducer';
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
    game: gameReducer,
    settings: settingsReducer,
    nav: navigationReducer
});

export default rootReducer;
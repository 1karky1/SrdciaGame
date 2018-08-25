import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
    gameReducer,
    nav: navigationReducer
});

export default rootReducer;
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { middleware } from '../navigation/AppNavigator';

const store = createStore(
    rootReducer,
    applyMiddleware(middleware)
);

export default store;

import {createStackNavigator} from "react-navigation";
import routes from './routes';
import configuration from './navigatorConfiguration';
import {
    createReactNavigationReduxMiddleware,
    reduxifyNavigator
} from "react-navigation-redux-helpers";
import {connect} from "react-redux";

const AppNavigator = createStackNavigator(
    routes,
    configuration
);


// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export {AppNavigator, AppWithNavigationState, middleware}
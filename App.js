import React from "react";
import { Provider } from 'react-redux';
import store from './app/store';
import { createAppContainer } from "react-navigation";
import navigator from "./app/navigator";
import { StatusBar } from 'react-native';

const AppNavigation = createAppContainer(navigator);

export default class App extends React.Component {

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
};

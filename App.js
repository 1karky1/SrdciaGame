import { Provider } from 'react-redux';
import React from 'react';
import {StatusBar} from 'react-native';
import store from './app/store'
import {AppWithNavigationState} from './app/navigation/AppNavigator'

export default class Root extends React.Component {

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}


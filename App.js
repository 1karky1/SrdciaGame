import { Provider } from 'react-redux';
import React from 'react';
import store from './app/store'
import {AppWithNavigationState} from './app/navigation/AppNavigator'

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}


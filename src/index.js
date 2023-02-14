import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from 'myredux/store';
import Screens from 'screens'

console.disableYellowBox = true;

const { store, persistor } = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Screens />
                </PersistGate>
            </Provider>
        )
    }
}
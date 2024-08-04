import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import A from './components/A'

const App = () => {
    return (
        <Provider store={store}>
        <A/>
        </Provider>
    );
};

export default App;

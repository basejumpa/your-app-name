import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ComponentA from './components/ComponentA'

const App = () => {
    return (
        <Provider store={store}>
        <ComponentA/>
        </Provider>
    );
};

export default App;

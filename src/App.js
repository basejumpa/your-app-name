import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

const App = () => {
    return (
        <Provider store={store}>
        <ComponentA/>
        <ComponentB/>
        </Provider>
    );
};

export default App;

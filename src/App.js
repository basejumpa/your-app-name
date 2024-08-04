import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

const App = () => {
    return (
        <Provider store={store}>
        <ComponentA/>
        <ComponentB/>
        <ComponentC/>
        </Provider>
    );
};

export default App;

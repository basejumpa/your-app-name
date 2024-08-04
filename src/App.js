import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
        <div>No components added yet.</div>
        </Provider>
    );
};

export default App;

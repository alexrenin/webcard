import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import storeFactory from './store/index'
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

window.React = React
window.store = store

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);

registerServiceWorker();

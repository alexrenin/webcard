import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import'./i18n';
import i18n from "./i18n";
import App from './App';
import storeFactory from './store/index'
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

window.React = React
window.store = store

//TODO лажа с i18n: непродуманая инициализация и взаимодествие с store
i18n.changeLanguage(store.getState().language.listItems[store.getState().language.currentItem].text.toLowerCase())

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);

registerServiceWorker();

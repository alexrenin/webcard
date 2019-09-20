import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import'./i18n'
import i18n from "./i18n"
import App from './App'
import { HashRouter } from 'react-router-dom'
import storeFactory from './store/index'
// import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

window.React = React
window.store = store

//initialize i18n
i18n.changeLanguage(
	store.getState().language
		.listItems[store.getState().language.currentItem]
			.text.toLowerCase()
)

ReactDOM.render(
	<HashRouter>
		<App store={store} />
	</HashRouter>,
    document.getElementById('root')
)

// registerServiceWorker();

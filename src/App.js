import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/App.css';
import {MainMenu, HomePage} from './containers'

const PAGES_CODE = {
    home: 'home',
    summary: 'summary',
    portfolio: 'portfolio',
    contacts: 'contacts',
}



class App extends Component {

	getChildContext() {
		return {
			store: this.props.store
		}
	}

	// componentWillMount() {
	// 	this.unsubscribe = store.subscribe(
	// 		() => this.forceUpdate()
	// 	)
	// }
	//
	// componentWillUnmount() {
	// 	this.unsubscribe()
	// }

	render() {
		return (
		  <div className="App">
			<MainMenu />
			<div className="contentContainer">
				<HomePage />
			</div>

		  </div>
		)
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired
}

App.childContextTypes = {
	store: PropTypes.object.isRequired
}

export default App;

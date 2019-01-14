import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/App.css';
import {MainMenu, HomePage, PortfolioPage} from './containers'
import Contact from "./ContactPage/Contact";

class App extends Component {

	getChildContext() {
		return {
			store: this.props.store
		}
	}

	componentWillMount() {
		this.unsubscribe = window.store.subscribe(
			() => this.forceUpdate()
		)
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	render() {
		return (
		  <div className="App">
			<MainMenu />
			<div className="contentContainer">
				<HomePage />
				<PortfolioPage />
				<Contact />
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

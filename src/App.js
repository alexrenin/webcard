import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Main from './pages/main/main'

class App extends Component {


	render() {
		return (
            <div className="App">
				<Main
					store = {this.props.store}
				/>
            </div>
		)
	}
}

App.propTypes = {
	store: PropTypes.object.isRequired
}

export default App

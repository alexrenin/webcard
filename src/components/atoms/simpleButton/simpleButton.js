import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const propTypesSimpleButton = {
	name: PropTypes.string,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
}

function SimpleButton ({
	name = '',
	selected = false,
	onClick = f=>f,
}) {
	const className = 'simpleButton' + (selected ? ' selected' : '');

	return (
		<button
			className={className}
			onClick={onClick}
		>
			{name}
		</button>
	)
}
SimpleButton.propTypes = propTypesSimpleButton

export default SimpleButton
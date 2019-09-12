import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const propTypesHyperlinkButton = {
	href: PropTypes.string,
	name: PropTypes.string,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
}

function HyperlinkButton ({
	title = '',
	selected = false,
	href = '',
	onClick = f=>f,
}) {
	const className = 'menuItem' + (selected ? ' selected' : '');

	return (
		<div
			className={className}
			onClick={onClick}
		>
			<a
				href={href}
			   	onClick={onClick}
			>
				{title}
			</a>
		</div>
	)
}
HyperlinkButton.propTypes = propTypesHyperlinkButton

export default HyperlinkButton
import React from 'react'
import PropTypes from 'prop-types'

const propTypesHyperlinkButton = {
	href: PropTypes.string,
	name: PropTypes.string,
	selected: PropTypes.bool,
	onClick: PropTypes.func,
}

function HyperlinkButton ({
	name = '',
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
				{name}
			</a>
		</div>
	)
}
HyperlinkButton.propTypes = propTypesHyperlinkButton

export default HyperlinkButton
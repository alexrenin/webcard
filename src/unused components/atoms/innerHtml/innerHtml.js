import React from 'react'
import PropTypes from 'prop-types'

const propTypesInnerHtml = {
	innerHtml: PropTypes.string,
}

function InnerHtml({
	innerHtml = "",
}) {
	return (
		<div dangerouslySetInnerHTML = {{__html: innerHtml}} />
	)
}
InnerHtml.propTypes = propTypesInnerHtml

export default InnerHtml
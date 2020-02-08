import React from 'react'
import PropTypes from 'prop-types'

const propTypesContactUrlBtn = {
	href: PropTypes.string,
	classNameCI: PropTypes.string,
	title:PropTypes.string,
}

function ContactUrlBtn ({
	href="",
	classNameCI="",
	title="",
}) {
	return (
		<li className="socialLinkContainer">
			<a
				href={href}
				className="socialLink"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className={classNameCI}/>
				<h3 className="portfolioFigcaptionTitle">
					{title}
				</h3>
			</a>
		</li>
	)
}
ContactUrlBtn.propTypes = propTypesContactUrlBtn

export default ContactUrlBtn
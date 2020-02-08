import React from 'react'
import PropTypes from 'prop-types'

const propTypesResumeItem = {
	title: PropTypes.string,
	imageCSS: PropTypes.string,
	subTitle: PropTypes.string,
	sizeCSS: PropTypes.string,
}

function ResumeItem ({
	title="",
	imageCSS="",
	subTitle="",
	sizeCSS="",
}) {
	const resumeItemClass = "resumeItem " + sizeCSS + " " + imageCSS

	return (
		<div className={resumeItemClass}>
			<h3>
				{title}
			</h3>
			<h4>
				{subTitle}
			</h4>
		</div>
	)
}
ResumeItem.propTypes = propTypesResumeItem

export default ResumeItem
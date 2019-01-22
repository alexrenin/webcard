import React from 'react';
import PropTypes from 'prop-types';
import './Resume.css';
import { v4 } from 'uuid';
import C from '../Constant'

const Resume = ({href="", subTitle="subTitle", resumeList=[], t=str=>str}) => {
	return (
		<div className="resumePage" id={href}>
			<h1 className="resumeTitle">
				{t(subTitle)}
			</h1>
			<div className="resumeContainer">
				<div className="resumeSubContainer1">
					{resumeList.map(
						item => {
							let key = v4()
							return (
								<ResumeItemContainer {...{...item, key, t}}/>
							)
						}
					)}
				</div>
				<div className="resumeSubContainer2">

				</div>
			</div>
		</div>
	)
}
Resume.propTypes = {
	href: PropTypes.string,
	subTitle: PropTypes.string,
	resumeList: PropTypes.array,
	t: PropTypes.func,
}

const ResumeItemContainer = ({title="", itemList=[], t=str=>str}) => {

	return (
		<div className="resumeItemContainer">
			{itemList.map(
				item => {
					let key = v4()
					return (
						<ResumeItem {...{...item, key, t}}/>
					)
				}
			)}
		</div>
	)
}
ResumeItemContainer.propTypes = {
	title: PropTypes.string,
	itemList: PropTypes.array,
	t: PropTypes.func,
}

const ResumeItem = ({title="title", imageCSS="", subTitle="subTitle", sizeCSS="", t=str=>str}) => {
	let resumeItemClass = "resumeItem " + sizeCSS + " " + imageCSS;

	return (
		<div className={resumeItemClass}>
			<h3>
				{t(title)}
			</h3>
			<h4>
				{t(subTitle)}
			</h4>
		</div>
	)
}

export default Resume
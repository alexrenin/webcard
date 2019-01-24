import React from 'react';
import PropTypes from 'prop-types';
import './Resume.css';
import '../css/fonts/fontawesome-free-5.6.3-web/css/all.css'
import { v4 } from 'uuid';
import C from '../Constant'

import CanvasCircle from "./CanvasCircle/CanvscCircle"

const Resume = ({href="", subTitle="subTitle", resumeList=[], skillList=[], t=str=>str}) => {
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
					{skillList.map(
						item => {
							let key = v4()
							return (
								<ResumeSkill {...{...item, key, t}}/>
							)
						}
					)}
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
			<h2 className="resumeItemTitle">
				{t(title)}
			</h2>
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
ResumeItem.propTypes = {
	title: PropTypes.string,
	imageCSS: PropTypes.string,
	subTitle: PropTypes.string,
	sizeCSS: PropTypes.string,
	itemList: PropTypes.array,
	t: PropTypes.func,
}

const ResumeSkill = ({title="", level=50, t=str=>str}) => {
	let whSize = 150

	return (
		<div className="resumeSkillContainer">
			<div className="resumeSkillCircleContainer">
				<CanvasCircle {...{whSize, level}}/>
				<span>
					{level + "%"}
				</span>
			</div>
			<h4>
				{t(title)}
			</h4>
		</div>
	)
}
ResumeSkill.propTypes = {
	level: PropTypes.number,
	title: PropTypes.string,
	subTitle: PropTypes.string,
	sizeCSS: PropTypes.string,
	itemList: PropTypes.array,
	t: PropTypes.func,
}

export default Resume
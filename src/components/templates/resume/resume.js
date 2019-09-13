import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
// import '../css/fonts/fontawesome-free-5.6.3-web/css/all.css'
import { v4 } from 'uuid'
import ResumeItemContainer from '../../molecules/resumeItemContainer/resumeItemContainer'
import ResumeSkill from '../../molecules/resumeSkill/resumeSkill'

const propTypesResume = {
	href: PropTypes.string,
	subTitle: PropTypes.string,
	resumeList: PropTypes.array,
	t: PropTypes.func,
}

function Resume ({
	href="",
	subTitle="",
	resumeList=[],
	skillList=[],
}) {
	return (
		<div
			className="resumePage"
			id={href}
		>
			<h1 className="resumeTitle">
				{subTitle}
			</h1>
			<div className="resumeContainer">
				<div className="resumeSubContainer1">
					{resumeList.map(
						item => {
							const key = v4()
							return (
								<ResumeItemContainer {...{
									...item,
									key,
								}} />
							)
						}
					)}
				</div>
				<div className="resumeSubContainer2">
					{skillList.map(
						item => {
							const key = v4(),
								level = +item.level
							return (
								<ResumeSkill {...{
									...item,
									level,
									key,
								}}/>
							)
						}
					)}
				</div>
			</div>
		</div>
	)
}
Resume.propTypes = propTypesResume

export default Resume
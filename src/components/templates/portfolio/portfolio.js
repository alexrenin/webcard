import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { withRouter } from 'react-router'
import PortfolioItem from '../../molecules/portfolioItem/portfolioItem'
import './style.css'

const propTypesPortfolio = {
	href: PropTypes.string,
	subTitle: PropTypes.string,
	portfolioList: PropTypes.array,
}

function Portfolio ({
	href="",
	subTitle="",
	portfolioList=[],
	history,
	location,
}) {
	const pathname = location.pathname || "",
		pathArray = pathname.split("/"),
		pathHref = pathArray[1],
		portfolioName = (pathHref === href) ? pathArray[2] : ""

	const historySetSubHref = subHrefString => {
		history.push("/" + href + "/" + subHrefString)
	}

	return (
		<div className="portfolioPage" id={href}>
			<h1 className="portfolioTitle">
				{subTitle}
			</h1>
			<div className="portfolioContainer">
				{portfolioList.map(
					item => {
						const key = v4()
						return (
							<PortfolioItem {...{
								...item,
								key,
								portfolioName,
								historySetSubHref,
							}} />
						)

					}
				)}
			</div>
		</div>
	)
}
Portfolio.propTypes = propTypesPortfolio

export default withRouter(Portfolio)


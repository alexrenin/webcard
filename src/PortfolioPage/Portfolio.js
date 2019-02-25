import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';
import { v4 } from 'uuid';
import { withRouter } from 'react-router'

const Portfolio = ({href="", subTitle="subTitle", portfolioList=[], t=str=>str, history, location}) => {
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
				{t(subTitle)}
			</h1>
			<div className="portfolioContainer">
				{portfolioList.map(
					item => {
						const key = v4()
						return (
								<PortfolioItem {...{...item, key, t, portfolioName, historySetSubHref}}/>
							)

					}
				)}
			</div>
		</div>
	)
}
Portfolio.propTypes = {
	href: PropTypes.string,
	subTitle: PropTypes.string,
	portfolioList: PropTypes.array,
	t: PropTypes.func,
}

const PortfolioItem = ({
	classNamePI="",
	alt="",
	subHref="",
	stackTehn=[],
	description={},
	portfolioName="",
	historySetSubHref = f => f,
	t=str=>str
}) => {
	let expandClass = (portfolioName === subHref) ? " expand" : "",
		portItemContClass = "portfolioItemContainer" + expandClass;

	const onClick = (event) => {
			event.preventDefault()
			historySetSubHref(subHref)
		},
		onClickButtonClose = (event) => {
			event.preventDefault()
			historySetSubHref("")
		}

	return (
		<figure className={portItemContClass} >
			<button className="closeButton" onClick={onClickButtonClose}></button>
			<div className={"portfolioItemImage " + classNamePI}>
			</div>
			<figcaption className="portfolioItemFigcaption" onClick={onClick}>
				<h3 className="portfolioFigcaptionTitle">
					{t(alt)}
				</h3>
				<p	className="portfolioItemStackTehn">
					{ (stackTehn.length === 0) ?
						"" :
						stackTehn.reduce((sum, current, i, arr) =>
							sum += (" / " + current)
						)
					}
				</p>
			</figcaption>
			<div className="portfolioItemDescription">
				<MipDescription {...{...description, t}}/>
			</div>
		</figure>
	)
}
PortfolioItem.propTypes = {
	classNamePI: PropTypes.string,
	alt: PropTypes.string,
	stackTehn: PropTypes.array,
	description: PropTypes.object,
	t: PropTypes.func,
}

const MipDescription = ({
	innerHtml = "",
	t = str=>str
}) =>
	<div dangerouslySetInnerHTML = {{__html: t(innerHtml)}} />

MipDescription.propTypes = {
	innerHtml: PropTypes.string,
	t: PropTypes.func
}

export default withRouter(Portfolio)


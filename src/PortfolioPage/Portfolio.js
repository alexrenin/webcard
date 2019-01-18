import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';
import { v4 } from 'uuid';
import C from '../Constant'

const Portfolio = ({href="", subTitle="subTitle", portfolioList=[], t=str=>str}) => {
	return (
		<div className="portfolioPage" id={href}>
			<h1 className="portfolioTitle">
				{t(subTitle)}
			</h1>
			<div className="portfolioContainer">
				{portfolioList.map(
					item => {
						let key = v4()
						return (
								<PortfolioItem {...{...item, key, t}}/>
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

const PortfolioItem = ({classNamePI="", alt="", stackTehn=[], description={}, t=str=>str}) => {
	let portItemContClass = "portfolioItemContainer";

	const onClick = (event) => {
			event.preventDefault()
			let portItemContNode = findParentNodeByClass(event.target, portItemContClass);

			portItemContNode.classList.add("expand");
		},
		onClickButtonClouse = (event) => {
			event.preventDefault()
			let portItemContNode = findParentNodeByClass(event.target, portItemContClass);
			portItemContNode.classList.remove("expand");
		}

	return (
		<figure className={portItemContClass} >
			<button className="closeButton" onClick={onClickButtonClouse}></button>
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
				{ (()=>{
					switch (description.id) {
						case C.MIP_DESC_ID:
						default:
							return ( <MipDescription {...{...description, t}}/> )
					}
					})()
				}
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

const MipDescription = ({text="", aText="", aHref="",t=str=>str}) => {
	return (
		<div>
			<p>
				{t(text)}
				<a href={aHref} target="_blank" rel="noopener noreferrer" >{t(aText)}</a>
			</p>
		</div>
	)
}
MipDescription.propTypes = {
	text: PropTypes.string,
	aText: PropTypes.string,
	aHref: PropTypes.string,
}

const findParentNodeByClass = (node, className) => {
	if (node.nodeName == "html")
		return

	if (node.classList.contains(className)) {
		return	node
	} else {
		return findParentNodeByClass(node.parentNode, className)
	}
}

export default Portfolio


import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';
import { v4 } from 'uuid';

const Portfolio = ({subTitle="subTitle", portfolioList=[], t=str=>str}) => {
	return (
		<div className="portfolioPage">
			<h1 className="portfolioTitle">{t(subTitle)}</h1>
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
	subTitle: PropTypes.string,
	portfolioList: PropTypes.array,
	t: PropTypes.func,
}

const PortfolioItem = ({classNamePI="", alt="", t=str=>str}) => {
	return (
		<figure className="portfolioItemContainer">
			<div className={"portfolioItemImage " + classNamePI}>
			</div>
			<figcaption className="portfolioItemFigcaption">
				<h3 className="portfolioFigcaptionTitle">
					{t(alt)}
				</h3>
			</figcaption>
		</figure>
	)
}
PortfolioItem.propTypes = {
	classNamePI: PropTypes.string,
	alt:PropTypes.string,
	t: PropTypes.func,
}

export default Portfolio
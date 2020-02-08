import React from 'react'
import PropTypes from 'prop-types'
import InnerHtml from '../../atoms/innerHtml/innerHtml'

const propTypesPortfolioItem = {
	classNamePI: PropTypes.string,
	alt: PropTypes.string,
	stackTehn: PropTypes.array,
	description: PropTypes.object,
}

function PortfolioItem ({
	classNamePI="",
	alt="",
	subHref="",
	stackTehn=[],
	description={},
	portfolioName="",
	historySetSubHref = f => f,
}) {
	const expandClass = (portfolioName === subHref) ? " expand" : "",
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
			<button
				className="closeButton"
				onClick={onClickButtonClose}
			/>
			<div className={"portfolioItemImage " + classNamePI}>
			</div>
			<figcaption
				className="portfolioItemFigcaption"
				onClick={onClick}
			>
				<h3 className="portfolioFigcaptionTitle">
					{alt}
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
				<InnerHtml {...description} />
			</div>
		</figure>
	)
}
PortfolioItem.propTypes = propTypesPortfolioItem

export default PortfolioItem
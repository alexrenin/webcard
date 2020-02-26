import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { withRouter } from 'react-router'
import PortfolioItem from '../../molecules/portfolioItem/portfolioItem'
import './style.css'

const propTypesPortfolio = {
	href: PropTypes.string,
	subtitle: PropTypes.string,
	portfolioList: PropTypes.array,
}

function Portfolio ({
	href="",
    subtitle="",
	portfolioList=[],
    history,
}) {

    const historySetSlug = createHistorySetter(history, href)

	return (
		<div
            className="portfolioPage"
            id={href}
        >
			<h1 className="portfolioTitle">
				{subtitle}
			</h1>
			<div className="portfolioContainer">
				{portfolioList.map(
					item => {
						const key = v4()
						return (
							<PortfolioItem {...{
								...item,
								key,
                                historySetSlug,
							}} />
						)

					}
				)}
			</div>
		</div>
	)
}
Portfolio.propTypes = propTypesPortfolio

/* Help functions */
function createHistorySetter(history, href) {
    return function historySetSlug (slugString)  {
        history.push("/" + href + "/" + slugString)
    }
}


export default withRouter(Portfolio)


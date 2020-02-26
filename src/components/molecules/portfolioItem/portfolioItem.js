import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const propTypesPortfolioItem = {
    title: PropTypes.string,
    slug: PropTypes.string,
	stack: PropTypes.array,
	description: PropTypes.object,
    image: PropTypes.object,
    historySetSlug: PropTypes.func,
}

function PortfolioItem ({
	title="",
	slug="",
	stack=[],
    image = {},
}) {

    const { file } = image || {},
        imageURL = (file || {}).url

	return (
		<figure className="portfolioItemContainer" >
			<div className={"portfolioItemImage"}>
                <img
                    alt={title}
                    src={imageURL}
                />
                <div className={"desktopBackground"} />
			</div>
            <Link
                to={`/portfolio/${slug}`}
                className="gatsbyLink"
            >
                <figcaption
                    className="portfolioItemFigcaption"
                >
                    <h3 className="portfolioFigcaptionTitle">
                        {title}
                    </h3>
                    <p	className="portfolioItemStackTehn">
                        { stack.join('/') }
                    </p>
                </figcaption>
            </Link>
		</figure>
	)
}
PortfolioItem.propTypes = propTypesPortfolioItem

export default PortfolioItem
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {getLinkWithLocale} from '../../atoms/helper'

const propTypesPortfolioItem = {
    title: PropTypes.string,
    slug: PropTypes.string,
	stack: PropTypes.array,
    image: PropTypes.object,
    locale: PropTypes.string,
}

function PortfolioItem ({
	title="",
	slug="",
	stack=[],
    image = {},
    locale,
}) {

    const { file } = image || {},
        imageURL = (file || {}).url

    const portfolioItemLink = getLinkWithLocale({
        link: `/portfolio/${slug}`,
        locale,
    })

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
                to={portfolioItemLink}
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
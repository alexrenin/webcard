import React from 'react'
import PropTypes from 'prop-types'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
	description={},
    historySetSlug = f => f,
}) {

	const onClick = (event) => {
			event.preventDefault()
            historySetSlug(slug)
		},
		onClickButtonClose = (event) => {
			event.preventDefault()
            historySetSlug("")
		}

    const { file } = image || {},
        imageURL = (file || {}).url


    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                console.log(node)
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

	return (
		<figure className="portfolioItemContainer" >
			<button
				className="closeButton"
				onClick={onClickButtonClose}
			/>
			<div className={"portfolioItemImage"}>
                <img
                    alt={title}
                    src={imageURL}
                />
                <div className={"desktopBackground"} />
			</div>
			<figcaption
				className="portfolioItemFigcaption"
				onClick={onClick}
			>
				<h3 className="portfolioFigcaptionTitle">
					{title}
				</h3>
				<p	className="portfolioItemStackTehn">
					{ stack.join('/') }
				</p>
			</figcaption>
			<div className="portfolioItemDescription">
                {documentToReactComponents(description.json, options)}
			</div>
		</figure>
	)
}
PortfolioItem.propTypes = propTypesPortfolioItem

export default PortfolioItem
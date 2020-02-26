import React from "react"
import {graphql, Link} from "gatsby"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"

import './style.css'

import Layout from "../layout/layout"
import C from '../../../constant'

export const query = graphql`
  query($slug: String!, $locale: String) {
    contentfulPortfolioItem(slug: { eq: $slug }, node_locale: { eq: $locale }) {
        title
        slug
        stack
        description {
            json
        }
    }
  }
`

const PortfolioItem = ({
    data = {},
    pageContext = {},
}) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return (
                    <img
                        alt={alt}
                        src={url}
                        style={{
                            maxWidth: '50%',
                        }}
                    />
                )
            }
        }
    }

    const {  contentfulPortfolioItem = {} } = data,
        { description } = contentfulPortfolioItem

    const { locale = 'en-US' } = pageContext

    const { defaultStrings = {} } = C,
        { backBtn } = defaultStrings[locale] || {}

    return (
        <Layout
            locale={locale}
            localHref={false}
        >
            <div
                className="portfolioItemSubMenu"
            >
                <Link
                    to={"/#portfolio"}
                >
                    {backBtn}
                </Link>
            </div>
            <div
                className="descriptionContainer"
            >
                {documentToReactComponents(description.json, options)}
            </div>
        </Layout>
    )
}

export default PortfolioItem

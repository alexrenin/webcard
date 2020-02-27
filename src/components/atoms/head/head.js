import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title = '' }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const subTitle = title ? `| ${title}` : ''

    return (
        <Helmet title={`${data.site.siteMetadata.title} ${subTitle}`} />
    )
}

export default Head
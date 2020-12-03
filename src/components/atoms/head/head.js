import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from 'images/favicon.ico';

const Head = ({ title = '' }) => {
  const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

  const subTitle = title ? `| ${title}` : '';

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {`${data.site.siteMetadata.title} ${subTitle}`}
      </title>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
  );
};

export default Head;

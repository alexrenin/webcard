import React from 'react';
import { graphql } from 'gatsby';

import 'fontsource-roboto';

import './style.css';

import Layout from 'components/templates/Layout';
import HeaderLinks from 'components/molecules/HeaderLinks';

import Home from '../components/templates/home/home';
import Portfolio from '../components/templates/portfolio/portfolio';
import Contacts from '../components/templates/contacts/contacts';
import Resume from '../components/templates/resume/resume';



export const query = graphql`        
    query($locale: String)  {
      allContentfulIndexPage (filter: { node_locale: { eq: $locale } }) {
         edges {
           node {
            resumePage {
                title
                subtitle
                href
                skills {
                    skillList {
                        level
                        title
                    }
                }
                resumeList {
                    title
                    achievements {
                        title
                        subtitle
                        size
                        image {
                            file {
                                url
                            }
                        }
                    }
                }                
            }
            homePage {
                title
                href
                logoTitle
                logoSubtitle
                name
                profession
                technologyStack {
                    stackTehn
                }
            }
            portfolioPage {
                title
                subtitle
                href
                portfolioList {
                    title
                    slug
                    stack
                    description {
                        json
                    }
                    image {
                        file {
                            url
                        }
                    }
                }
            }
            contactsPage {
                title
                href
                contactList {
                    title
                    iconId
                    link
                }
            }                                                                           
           }
         }
      }
    }
`;

// -- Help functions --

function reformatResumeData(resumePage = {}) {
  const { resumeList = [] } = resumePage;

  const newResumeList = resumeList.map((resumeItem) => {
    const { achievements } = resumeItem;
    const newAchievements = achievements.map((achievItem) => {
      const { image } = achievItem;
      const { file } = image || {};
      const { url } = file || {};

      return {
        ...achievItem,
        imageURL: url,
      };
    });
    return {
      ...resumeItem,
      achievements: newAchievements,
    };
  });

  return {
    ...resumePage,
    resumeList: newResumeList,
  };
}

/* Main component */

function Index({
  data = {},
  pageContext = {},
}) {
  const { allContentfulIndexPage = {} } = data;
  const { edges = [] } = allContentfulIndexPage;
  const indexPage = (edges[0] || {}).node || {};
  const {
    homePage = {},
    resumePage = {},
    portfolioPage = {},
    contactsPage = {},
  } = indexPage;

  const { locale = 'en-US' } = pageContext;

  const headerRightPart = (
    <HeaderLinks />
  );

  return (
    <Layout
      mainTitle={"Alex Renin"}
      subTitle={"Frontend Developer"}
      headerRightPart={headerRightPart}
    >
      <Home {
        ...homePage
      }
      />
      <Resume {
        ...reformatResumeData(resumePage)
      }
      />
      <Portfolio {...{
        ...portfolioPage,
        locale,
      }}
      />
      <Contacts {
        ...contactsPage
      }
      />
    </Layout>
  );
}

function IndexOld({
  data = {},
  pageContext = {},
}) {
  const { allContentfulIndexPage = {} } = data;
  const { edges = [] } = allContentfulIndexPage;
  const indexPage = (edges[0] || {}).node || {};
  const {
    homePage = {},
    resumePage = {},
    portfolioPage = {},
    contactsPage = {},
  } = indexPage;

  const { locale = 'en-US' } = pageContext;

  return (
    <Layout {...{
      locale,
    }}
    >
      <Home {
        ...homePage
      }
      />
      <Resume {
        ...reformatResumeData(resumePage)
      }
      />
      <Portfolio {...{
        ...portfolioPage,
        locale,
      }}
      />
      <Contacts {
        ...contactsPage
      }
      />
    </Layout>
  );
}

export default Index;

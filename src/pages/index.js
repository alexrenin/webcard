import React from 'react'
import {HashRouter} from 'react-router-dom'
import {graphql} from 'gatsby'

import './style.css'

import C from '../constant'
import storeFactory from '../store/index'
import Home from '../components/templates/home/home'
import HeaderMenu from '../components/organisms/headerMenu/headerMenu'
import Portfolio from "../components/templates/portfolio/portfolio"
import Contacts from "../components/templates/contacts/contacts"
import Resume from "../components/templates/resume/resume"
import Layout from '../components/templates/layout/layout'

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
           }
         }
      }
    }
`

function Index(
    props,
) {
    const {data = {}, pageContext = {}} = props

    const {allContentfulIndexPage = {}} = data,
        {edges = []} = allContentfulIndexPage,
        indexPage = (edges[0] || {}).node || {},
        {
            homePage = {},
            resumePage = {},
            portfolioPage = {}, } = indexPage

    const { locale = 'en-US' } = pageContext

    const store = storeFactory()
    const storeState = store.getState()

    const translatedStore = storeState

    return (
        <HashRouter>
            <Layout {...{
                locale,
            }} >
                <Home {
                    ...homePage
                } />
                <Resume {
                    ...reformatResumeData(resumePage)
                } />
                <Portfolio {...{
                    ...portfolioPage,
                    locale,
                }} />
                <Contacts {
                    ...translatedStore.contentList[3]
                }/>
            </Layout>
        </HashRouter>
    )
}

// -- Help functions --

function reformatResumeData(resumePage = {}) {
    const { resumeList = [] } = resumePage

    const newResumeList = resumeList.map( resumeItem => {
        const { achievements } = resumeItem
        const newAchievements = achievements.map( achievItem => {
            const { image } = achievItem,
                { file } = image || {},
                { url } = file || {}

            return {
                ...achievItem,
                imageURL: url,
            }
        })
        return {
            ...resumeItem,
            achievements: newAchievements
        }
    })

    return {
        ...resumePage,
        resumeList: newResumeList
    }

}

export default Index


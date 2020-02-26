import React from 'react'
import {HashRouter} from 'react-router-dom'
import {graphql, useStaticQuery} from 'gatsby'

import './style.css'

import C from '../constant'
import storeFactory from '../store/index'
import Home from '../components/templates/home/home'
import HeaderMenu from '../components/organisms/headerMenu/headerMenu'
import Portfolio from "../components/templates/portfolio/portfolio"
import Contacts from "../components/templates/contacts/contacts"
import Resume from "../components/templates/resume/resume"

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
        { homePage = {}, resumePage = {} } = indexPage

    console.log(indexPage)
    console.log()
    const {locales} = C
    const {locale = 'en-US'} = pageContext

    const store = storeFactory()
    const storeState = store.getState()

    const translatedStore = storeState

    return (
        <HashRouter>
            <div className="App">
                <HeaderMenu
                    contentList={translatedStore.contentList}
                    pullDownMenuContent={{
                        locales,
                        locale,
                    }}
                    pullDownMenuClick={changeLngHandler}
                />
                <div className="contentContainer">
                    <Home {
                        ...homePage
                    } />
                    <Resume {
                        ...reformatResumeData(resumePage)
                    } />
                    <Portfolio {
                        ...translatedStore.contentList[2]
                     } />
                    <Contacts {
                        ...translatedStore.contentList[3]
                    }/>
                </div>
            </div>
        </HashRouter>
    )
}

// -- Help functions --

function changeLngHandler(lngID) {
    const currentUrl = window.location.href,
        arrSubURL = currentUrl.split('/')

    const current = arrSubURL[3],
        currentLocales = C.locales.find(({path}) => path === current)
            || C.locales.find(({isDefault}) => isDefault)

    if (currentLocales.langID === lngID) {
        return
    }

    const newLocales = C.locales.find(({langID}) => langID === lngID)

    let newURLarr = [...arrSubURL]

    if (currentLocales.isDefault) {
        newURLarr.splice(3, 0, newLocales.path)
    } else {
        if (newLocales.isDefault) {
            newURLarr.splice(3, 1)
        } else {
            newURLarr[3] = newLocales.path
        }
    }

    const newURL = newURLarr.join('/')
    window.open(newURL, "_self")
}

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


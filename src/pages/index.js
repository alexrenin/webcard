import React from 'react'
import { HashRouter } from 'react-router-dom'

import './style.css'

import C from '../constant'
import storeFactory from '../store/index'
import Home from '../components/templates/home/home'
import HeaderMenu from '../components/organisms/headerMenu/headerMenu'
import Portfolio from "../components/templates/portfolio/portfolio"
import Contacts from "../components/templates/contacts/contacts"
import Resume from "../components/templates/resume/resume"

function Index(
    props
) {

    const store = storeFactory()
    const storeState = store.getState()

    const translatedStore = storeState

    return (
        <HashRouter>
            <div className="App">
                <HeaderMenu
                    contentList={translatedStore.contentList}
                    pullDownMenuContent={getPullDownMenuContent(C.locales)}
                    pullDownMenuClick={changeLngHandler}
                />
                <div className="contentContainer">
                    <Home {
                              ...translatedStore.contentList[0]
                          } />
                    <Resume {
                                ...translatedStore.contentList[1]
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
        currentLocales = C.locales.find( ({ path }) => path === current)
            || C.locales.find( ({ isDefault }) => isDefault)

    if (currentLocales.langID === lngID)
        return

    const newLocales = C.locales.find( ({ langID }) => langID === lngID)

    let newURLarr = [...arrSubURL]

    if (currentLocales.isDefault) {
        newURLarr.splice(3,0,newLocales.path)
    } else {
        if (newLocales.isDefault) {
            newURLarr.splice(3,1)
        } else {
            newURLarr[3] = newLocales.path
        }
    }

    const newURL = newURLarr.join('/')
    window.open(newURL, "_self")
}

function getPullDownMenuContent(locales) {


    return {
        currentItem: 1,
        listItems: locales.map ( ({ langID, path, name }) => {
            return {
                title: name,
                text: path,
                id: langID,
            }
        })
    }
}

export default Index


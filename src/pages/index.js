import React from 'react'
import { withNamespaces } from 'react-i18next'
import { HashRouter } from 'react-router-dom'

import './style.css'

import i18n from "../i18n"
import storeFactory from '../store/index'
import Home from '../components/templates/home/home'
import HeaderMenu from '../components/organisms/headerMenu/headerMenu'
import Portfolio from "../components/templates/portfolio/portfolio"
import changeLanguage from "../actions"
import Contacts from "../components/templates/contacts/contacts"
import Resume from "../components/templates/resume/resume"



// i18n.changeLanguage(
// 	store.getState().language
// 		.listItems[store.getState().language.currentItem]
// 			.text.toLowerCase()
// )

function Index(
    t = f => f,
) {
    const store = storeFactory()
    const storeState = store.getState()

    const translatedStore = storeState

    return (
        <HashRouter>
            <div className="App">
                <HeaderMenu
                    contentList={translatedStore.contentList}
                    pullDownMenuContent={translatedStore.language}
                    pullDownMenuClick={createChangeLngHandler(store)}
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
                <p>aaaaaa!</p>
            </div>
        </HashRouter>
    )
}

// -- Help functions --

function createChangeLngHandler(store) {
    return function changeLngHandler(lngId) {
        const selectedLanguages = lngId.slice(0, 2),
            languagesCurrentItem = lngId.slice(2, 3)

        store.dispatch(changeLanguage(languagesCurrentItem))
        i18n.changeLanguage(selectedLanguages)
    }
}

function translateStore({
    storeState = {},
    t = f => f,
}) {
    const objectUpdater = createObjectUpdater(str => {
        const strStartCode = str.slice(0,2),
            isTranslatedStr = strStartCode === 't#'

        if (isTranslatedStr) {
            const newStr = str.slice(2)

            return t(newStr)
        }

        return str
    })

    return objectUpdater(storeState)
}

//find all strings in (obj) object or array include internal and update them using passed function (upd)
function createObjectUpdater(upd) {
    return function objectUpdater(obj) {
        if (typeof obj === 'string')
            return upd(obj)

        const isArray = Array.isArray(obj),
            isObj = typeof obj === 'object'

        if (isObj && !isArray) {
            let newObj = {}
            for (let prop in obj) {
                newObj[prop] = objectUpdater(obj[prop])
            }
            return newObj
        }

        if (isArray) {
            let newArr = []
            for (let i = 0; i < obj.length; i++) {
                newArr[i] = objectUpdater(obj[i])
            }
            return newArr
        }

        return obj
    }
}

export default Index


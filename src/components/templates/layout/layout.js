import React from 'react'

import HeaderMenu from '../../organisms/headerMenu/headerMenu'
import { getLocaleByContenfulID } from '../../atoms/helper'
import C from '../../../constant'

const Layout = ({
    locale = 'en-US',
    isHeaderLocal = true,
    children,
}) => {
    const { locales, pages = {} } = C
    const contentList = pages[locale]

    return (
        <div className="App">
            <HeaderMenu
                contentList={getHeaderContentList({
                    isHeaderLocal,
                    contentList,
                    locale
                })}
                pullDownMenuContent={getPullDownMenuContent({
                    locales,
                    locale
                })}
                pullDownMenuClick={changeLngHandler}
            />
            <div className="contentContainer">
                {children}
            </div>
        </div>
    )
}

function getHeaderContentList({ isHeaderLocal, contentList, locale }) {
    if (isHeaderLocal)
        return contentList

    const currentLocale = getLocaleByContenfulID(locale),
        { path, isDefault = false } = currentLocale

    return contentList.map( item => {
        const { href } = item,
            newHref = isDefault ?
                `#/${href}` :
                `${path}/#/${href}`

        return {
            ...item,
            href: newHref,
            localHref: false
        }
    } )
}

function getPullDownMenuContent({ locales, locale }) {

    const currentItem = locales.indexOf(
        locales.find( ({ contentfulID }) => locale === contentfulID )
    )

    return {
        currentItem,
        listItems: locales.map ( ({ langID, path, name }) => {
            return {
                title: name,
                text: path,
                id: langID,
            }
        })
    }
}

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



export default Layout
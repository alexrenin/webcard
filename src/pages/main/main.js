import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import i18n from "../../i18n"
import { withNamespaces } from 'react-i18next'
import Home from '../../components/templates/home/home'
import HeaderMenu from '../../components/organisms/headerMenu/headerMenu'
import Portfolio from "../../components/templates/portfolio/portfolio"
import changeLanguage from "../../actions"
import Contacts from "../../components/templates/contacts/contacts"
import Resume from "../../components/templates/resume/resume"

const propTypesMain = {
	store: PropTypes.object.isRequired,
	t: PropTypes.func.isRequired,
}

function Main({
	store = {},
	t = f => f,
}) {
	const storeState = store.getState()

	const translatedStore = translateStore({
		storeState,
		t,
	})

	return (
		<React.Fragment>
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
					...translatedStore.contentList[1]}
				/>
				<Portfolio {
					...translatedStore.contentList[2]}
				/>
				<Contacts {
					...translatedStore.contentList[3]}
				/>
			</div>
		</React.Fragment>
	)
}

Main.propTypes = propTypesMain

export default withNamespaces()(Main)


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
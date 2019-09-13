import React from 'react';
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import Home from './components/templates/home/home'
import HeaderMenu from './components/organisms/headerMenu/headerMenu'
import Portfolio from "./components/templates/portfolio/portfolio"
import i18n from "./i18n"
import changeLanguage from "./actions";
import Contact from "./ContactPage/Contact";
import Resume from "./components/templates/resume/resume"

export const  HomePage = (props, { store }) =>
	<Home {...store.getState().contentList[0]} />
HomePage.contextTypes = {
	store: PropTypes.object
}

export const MainMenu = (props, { store }) =>
	<HeaderMenu contentList={store.getState().contentList}
				pullDownMenuContent={store.getState().language}
				pullDownMenuClick={lngId => {
					let selectedLanguages = lngId.slice(0, 2),
						languagesCurrentItem = lngId.slice(2, 3)

					store.dispatch(changeLanguage(languagesCurrentItem))
					i18n.changeLanguage(selectedLanguages)
				}}

	/>
MainMenu.contextTypes = {
	store: PropTypes.object
}

export const ResumePage = (props, { store }) =>
	<Resume {...store.getState().contentList[1]} />
ResumePage.contextTypes = {
	store: PropTypes.object
}

export const PortfolioPage = (props, { store }) =>
	<Portfolio {...store.getState().contentList[2]} />
PortfolioPage.contextTypes = {
	store: PropTypes.object
}

const MultiLangContact = withNamespaces()(Contact);
export const ContactPage = (props, { store }) =>
	<MultiLangContact {...store.getState().contentList[3]} />
ContactPage.contextTypes = {
	store: PropTypes.object
}


import React from 'react';
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next';
import Home from './Home';
import HeaderMenu from './MenuHeaderDesctopAndMobile/HeaderMenu';
import Portfolio from "./PortfolioPage/Portfolio";
import i18n from "./i18n";
import changeLanguage from "./actions";

const MultiLangHome = withNamespaces()(Home);
export const  HomePage = (props, { store }) =>
	<MultiLangHome hpSourse={store.getState().contentList[0]} />
HomePage.contextTypes = {
	store: PropTypes.object
}

const MultiLangHeaderMenu = withNamespaces()(HeaderMenu);
export const MainMenu = (props, { store }) =>
	<MultiLangHeaderMenu contentList={store.getState().contentList}
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

const MultiLangPortfolio = withNamespaces()(Portfolio);
export const PortfolioPage = (props, { store }) =>
	<MultiLangPortfolio {...store.getState().contentList[1]} />
PortfolioPage.contextTypes = {
	store: PropTypes.object
}
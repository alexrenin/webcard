import React from 'react';
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next';
import Home from './Home';
import HeaderMenu from './MenuHeaderDesctopAndMobile/HeaderMenu';
import i18n from "./i18n";
import changeLanguage from "./actions";

const MultiLengHome = withNamespaces()(Home);
export const  HomePage = (props, { store }) =>
	<MultiLengHome hpSourse={store.getState().contentList[0]} />
HomePage.contextTypes = {
	store: PropTypes.object
}

const MultiLengHeaderMenu = withNamespaces()(HeaderMenu);
export const MainMenu = (props, { store }) =>
	<MultiLengHeaderMenu contentList={store.getState().contentList}
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


import React from 'react';
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next';
import Home from './Home';
import HeaderMenu from './MenuHeaderDesctopAndMobile/HeaderMenu';

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

	/>
MainMenu.contextTypes = {
	store: PropTypes.object
}


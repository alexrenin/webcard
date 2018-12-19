import React from 'react';
import PropTypes from 'prop-types'
import Home from './Home';
import HeaderMenu from './MenuHeaderDesctopAndMobile/HeaderMenu';

export const  HomePage = (props, { store }) =>
	<Home hpSourse={store.getState().contentList[0]} />
HomePage.contextTypes = {
	store: PropTypes.object
}

export const MainMenu = (props, { store }) =>
	<HeaderMenu contentList={store.getState().contentList}
				pullDownMenuContent={store.getState().language} />
MainMenu.contextTypes = {
	store: PropTypes.object
}
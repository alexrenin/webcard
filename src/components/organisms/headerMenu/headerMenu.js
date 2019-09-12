import React,  { useRef } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import MenuList from '../../molecules/menuList/menuList'
import PullDownMenu from '../../molecules/pullDownMenu/pullDownMenu'
import './style.css'

const propTypesHeaderMenu = {
	onClick: PropTypes.func,
	listItems: PropTypes.array,
	t: PropTypes.func,
}
function HeaderMenu ({
	contentList,
	pullDownMenuContent,
	pullDownMenuClick = f => f,
}) {
	return (
		<div className="headerMenu">
			<MenuList
				listItems={contentList}
			/>
			<PullDownMenu {... {
				...pullDownMenuContent,
				pullDownMenuClick,
			}} />
		</div>
	)
}
HeaderMenu.propTypes = propTypesHeaderMenu

export default HeaderMenu
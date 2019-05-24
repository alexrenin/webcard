import React,  { useRef } from 'react'
import PropTypes from 'prop-types'
import './HeaderMenu.css'
import { v4 } from 'uuid'

const HeaderMenu = ({
	contentList,
	pullDownMenuContent,
	pullDownMenuClick = f => f,
	t = f => f,
}) => {
	return (
		<div className="headerMenu">
			<MenuList
				listItems={contentList}
				t={t}
			/>
			<PullDownMenu {... {
				...pullDownMenuContent,
				pullDownMenuClick,
				t,
			}} />
		</div>
	)
}
HeaderMenu.propTypes = {
	onClick: PropTypes.func,
	listItems: PropTypes.array,
	t: PropTypes.func,
}

const PullDownMenu = ({
	currentItem = 0,
	listItems = [],
	pullDownMenuClick = f => f,
	t = f => f,
}) => {
	const inputCheckBox = useRef()
	const btnText = t(listItems[currentItem].text),
		id = v4()

	function onClick(event) {
		event.preventDefault()
		const clickedItem = event.target.nodeName === "LI" ?
			event.target :
			event.target.parentNode,
			clickedItemId = clickedItem.id

		const inputNode = inputCheckBox.current

		inputNode.checked = false

		pullDownMenuClick(clickedItemId)
	}

	function closeMenu(e) {
		const inputNode = inputCheckBox.current
		inputNode.checked = false
	}

	return (
		<div className='pullDownMenu'>
			<div className="menuButton">
				<input
					type="checkbox"
					ref={inputCheckBox}
					id={id}
					className="menuInput"
				>
				</input>
				<label
					htmlFor={id}
					className="menuLabel"
				>
					{btnText}
				</label>
				<ul className='pullDownMenuList'>
					{listItems.map(item => {
						let key = v4()
						return (
							<MenuItem {...{
								...item,
								onClick,
								t,
								key,
							}} />
						)
					})}
				</ul>
				<div
					className='backgroundMenu'
					onClick={closeMenu}
				/>
			</div>
		</div>
	)
}
PullDownMenu.propTypes = {
	currentItem: PropTypes.number,
	listItems: PropTypes.array,
	pullDownMenuClick: PropTypes.func,
	t: PropTypes.func,
}

const MenuList = ({
	listItems = [],
	t = f => f
}) =>
	<ul className="menuList">
		{listItems.map(item =>
			<MenuItem {...{
				...item,
				t,
			}} />,
		)}
	</ul>
MenuList.propTypes = {
	listItems: PropTypes.array,
}

const MenuItem = ({
	title = 'title',
	href,
	selected,
	onClick = f => f,
	id = '',
	t = str => str
}) => {
	let className = 'menuItem' + (selected ? ' selected' : '')

	title = t(title)
	return (
		<li className={className}
			onClick={onClick}
			id={id}>
			<a
				href={'#' + href}
				/*onClick={onClick}*/
			>
				{title}
			</a>
		</li>
	)
}
MenuItem.propTypes = {
	href: PropTypes.string,
	title: PropTypes.string,
	onClick: PropTypes.func,
	id: PropTypes.string,
	t: PropTypes.func,
}

export default HeaderMenu
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import SimpleButton from '../../atoms/simpleButton/simpleButton'
import './style.css'

const propTypesPullDownMenu = {
	currentItem: PropTypes.number,
	listItems: PropTypes.array,
	pullDownMenuClick: PropTypes.func,
	t: PropTypes.func,
}
function PullDownMenu ({
	currentItem = 0,
	listItems = [],
	pullDownMenuClick = f => f,
}) {
	const inputCheckBox = useRef()
	const { text = '' } = listItems[currentItem] || {},
		btnText = text,
		id = v4()
	const closeMenu = createCloseMenu(inputCheckBox),
		onClick = createOnClick({
			closeMenu,
			pullDownMenuClick,
		})


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
						const key = v4()
						const {id = ''} = item

						return (
							<li
								key={key}
								data-id={id}
							>
								<SimpleButton {...{
									...item,
									onClick,
								}} />
							</li>
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
PullDownMenu.propTypes = propTypesPullDownMenu

function createOnClick({
	closeMenu = f=>f,
	pullDownMenuClick = f => f,
}) {
	return function onClick(event) {
		event.preventDefault()
		const clickedItem = event.target.nodeName === "LI" ?
				event.target :
				event.target.parentNode,
			clickedItemId = clickedItem.dataset.id

		closeMenu()
		pullDownMenuClick(clickedItemId)
	}
}

function createCloseMenu(inputCheckBox) {
	return function closeMenu() {
		const inputNode = inputCheckBox.current
		inputNode.checked = false
	}
}

export default PullDownMenu
import React from 'react';
import PropTypes from 'prop-types';
import './HeaderMenu.css';
import { v4 } from 'uuid'

const HeaderMenu = ({contentList, pullDownMenuContent, pullDownMenuClick=f=>f,
					}) => {
	return (
        <div className="headerMenu">
            <MenuList listItems={contentList}/>
			<PullDowmMenu {...pullDownMenuContent}
			/>
        </div>
    )
}
HeaderMenu.propTypes = {
    onClick: PropTypes.func,
    listItems: PropTypes.array,
}

const PullDowmMenu = ({currentItem=0, listItems=[]}) => {
    const onClick = event => {
		let clickedItem = event.target.parentNode,
			menuButton = clickedItem.parentNode.parentNode,
			inputElement = menuButton.querySelector('input');

		inputElement.checked = false;
	},
		btnText = listItems[currentItem].text,
		id=v4();

    return (
		<div className='pullDownMenu'>
			<div className="menuButton">
				<input type="checkbox" id = {id} className="menuInput">
				</input>
				<label
					htmlFor={id}
					className="menuLabel"
					>
					{btnText}
				</label>
				<ul className='pullDownMenuList'>
					{listItems.map ( item =>
						<MenuItem {...{...item, onClick}} />
					)}
				</ul>
			</div>
		</div>
	)
}
PullDowmMenu.propTypes = {
	currentItem: PropTypes.number,
	listItems: PropTypes.array,
}

const MenuList = ({ listItems=[] }) =>
    <ul className="menuList">
        {listItems.map ( item =>
            <MenuItem {...item} />
        )}
    </ul>
MenuList.propTypes = {
    listItems: PropTypes.array,
}

const MenuItem = ({ title='title', href, selected, onClick=f=>f}) => {
    let className = 'menuItem' + (selected ? ' selected' : '');
    return (
        <li className={className}
             onClick={onClick}>
            <a href={'#'+href}
               onClick={onClick}>
                {title}
            </a>
		</li>
    )
}
MenuItem.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
}

export default HeaderMenu
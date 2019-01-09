import React from 'react';
import PropTypes from 'prop-types';
import './HeaderMenu.css';
import { v4 } from 'uuid';

const HeaderMenu = ({contentList, pullDownMenuContent, pullDownMenuClick=f=>f, t=f=>f
					}) => {
	return (
        <div className="headerMenu">
            <MenuList listItems={contentList}
					  t={t}/>
			<PullDowmMenu {... {...pullDownMenuContent, t}}
			/>
        </div>
    )
}
HeaderMenu.propTypes = {
    onClick: PropTypes.func,
    listItems: PropTypes.array,
	t: PropTypes.func,
}

const PullDowmMenu = ({currentItem=0, listItems=[], t=f=>f}) => {
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
					{t(btnText)}
				</label>
				<ul className='pullDownMenuList'>
					{listItems.map ( item =>
						<MenuItem {...{...item, onClick, t}} />
					)}
				</ul>
			</div>
		</div>
	)
}
PullDowmMenu.propTypes = {
	currentItem: PropTypes.number,
	listItems: PropTypes.array,
	t: PropTypes.func,
}

const MenuList = ({ listItems=[], t=f=>f }) =>
    <ul className="menuList">
        {listItems.map ( item =>
            <MenuItem {...{...item, t}} />
        )}
    </ul>
MenuList.propTypes = {
    listItems: PropTypes.array,
}

const MenuItem = ({ title='title', href, selected, onClick=f=>f, t=str=>str}) => {
    let className = 'menuItem' + (selected ? ' selected' : '');

    title = t(title);

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
	t: PropTypes.func,
}

export default HeaderMenu
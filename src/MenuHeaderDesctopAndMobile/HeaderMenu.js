import React from 'react';
import PropTypes from 'prop-types';
import './HeaderMenu.css';

/* ---- Example add to App ---- */

/*<Menu
	{...sourse}
	onClick = { (event, inputIsChecked) => {
		let appDiv = document.querySelector('.App');
		inputIsChecked ?
			appDiv.classList.remove('menuOpen') :
			appDiv.classList.add('menuOpen')
	}}
/>*/

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
    const onBtnClick = event => {
		let menuButton = event.target.parentNode,
			pullDowmMenuDiv = menuButton.parentNode,
			inputElement = menuButton.querySelector('input'),
			inputIsChecked = inputElement.checked;

		inputIsChecked ?
			pullDowmMenuDiv.classList.remove('expand') :
			pullDowmMenuDiv.classList.add('expand')
	},
		btnText = listItems[currentItem].text;

    return (
		<div className='pullDowmMenu'>
			<MenuButtonWithText
				   onClick={onBtnClick}
				   btnText={btnText}
			/>
			<ul className='pullDownMenuList'>
				{listItems.map ( item =>
					<MenuItem {...item} />
				)}
            </ul>
		</div>
	)
}
PullDowmMenu.propTypes = {
	currentItem: PropTypes.number,
	listItems: PropTypes.array,
}

const MenuButtonWithText  = ({ id='inputId', onClick=f=>f, btnText="BtnText"}) =>
	<div className="menuButton">
		<input type="checkbox" id = {id} className="menuInput">
		</input>
		<label
			htmlFor={id}
			className="menuLabel"
			onClick={onClick}>
			{btnText}
		</label>
	</div>
MenuButtonWithText.propTypes = {
	id: PropTypes.string,
	onClick: PropTypes.func,
	bntText: PropTypes.string,
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
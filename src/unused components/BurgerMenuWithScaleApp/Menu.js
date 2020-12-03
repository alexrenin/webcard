import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

/* ----Example add to App---- */

{/*<Menu*/}
{/*{...sourse}*/}
{/*onClick = { (event, inputIsChecked) => {*/}
{/*let appDiv = document.querySelector('.App');*/}
{/*inputIsChecked ?*/}
{/*appDiv.classList.remove('menuOpen') :*/}
{/*appDiv.classList.add('menuOpen')*/}
{/*}}*/}
{/*!/>*/}

const Menu = ({ contentList, onClick=f=>f }) => {
  const click = event => {
    let menuButton = event.target.parentNode,
      menuDiv = menuButton.parentNode,
      inputElement = menuButton.querySelector('input'),
      inputIsChecked = inputElement.checked;

    inputIsChecked ?
      menuDiv.classList.remove('open') :
      menuDiv.classList.add('open')

    onClick(event, inputIsChecked)
  }

  return (
    <div className="menu"
      /*id = {menuid}*/>
      <MenuButton onClick={click}/>
      <MenuList listItems={contentList}/>
    </div>
  )
}
Menu.propTypes = {
  onClick: PropTypes.func,
  listItems: PropTypes.array,
}

const MenuList = ({ listItems=[] }) =>
  <div className="menuList">
    {listItems.map ( item =>
      <MenuItem {...item} />
    )}
  </div>
MenuList.propTypes = {
  listItems: PropTypes.array,
}

const MenuItem = ({ title='title', href, selected, onClick=f=>f}) => {
  let className = 'menuItem' + (selected ? ' selected' : '');
  return (
    <div className={className}
      onClick={onClick}>
      <a href={'#'+href}
        onClick={onClick}>
        {title}
      </a>
    </div>
  )
}
MenuItem.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
}

const MenuButton = ({ id='inputId', onClick=f=>f }) =>
  <div className="menuButton">
    <input type="checkbox" id = {id} className="menuInput">
    </input>
    <label
      htmlFor={id}
      className="menuLabel"
      onClick={onClick}>
    </label>
  </div>
MenuButton.propTypes = {
  onClick: PropTypes.func
}

export default Menu
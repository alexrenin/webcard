import React from 'react';
import './css/Menu.css';

const Menu = () =>
    <div className="menu">
        <MenuButton/>
    </div>

const MenuButton = ({ id=0, onClick=f=>f }) => {
    function toggle(event) {
        console.log(event);
    }

    return (
        <div className="menuButton">
            <input type="checkbox" id = {id} className="menuInput">
            </input>
            <label
                htmlFor={id}
                className="menuLabel"
                onClick={onClick}>

            </label>
        </div>
    )
}

export default Menu
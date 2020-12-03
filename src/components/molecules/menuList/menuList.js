import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import HyperlinkButton from 'components/atoms/hyperlinkButton/hyperlinkButton';

import './style.css';

const propTypesMenuList = {
  listItems: PropTypes.array,
};
function MenuList({
  listItems = [],
}) {
  return (
    <ul className="menuList">
      {listItems.map((item) => {
        const key = v4();

        return (
          <li
            key={key}
          >
            <HyperlinkButton {
              ...item
            }
            />
          </li>
        );
      })}
    </ul>
  );
}
MenuList.propTypes = propTypesMenuList;

export default MenuList;

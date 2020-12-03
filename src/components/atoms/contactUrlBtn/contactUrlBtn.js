import React from 'react';
import PropTypes from 'prop-types';

import { getIconById } from '../icons/icons';

const propTypesContactUrlBtn = {
  link: PropTypes.string,
  iconId: PropTypes.string,
  title: PropTypes.string,
};

function ContactUrlBtn({
  link = '',
  iconId = '',
  title = '',
}) {
  return (
    <li className="socialLinkContainer">
      <a
        href={link}
        className="socialLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        {getIconById(iconId)}
        <h3 className="portfolioFigcaptionTitle">
          {title}
        </h3>
      </a>
    </li>
  );
}
ContactUrlBtn.propTypes = propTypesContactUrlBtn;

export default ContactUrlBtn;

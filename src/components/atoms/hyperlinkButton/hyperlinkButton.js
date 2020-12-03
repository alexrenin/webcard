import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './style.css';

const propTypesHyperlinkButton = {
  href: PropTypes.string,
  name: PropTypes.string,
  selected: PropTypes.bool,
  isLocalHref: PropTypes.bool,
  onClick: PropTypes.func,
};

function HyperlinkButton({
  title = '',
  selected = false,
  href = '',
  isLocalHref = true,
  onClick = (f) => f,
}) {
  const className = `menuItem${selected ? ' selected' : ''}`;
  const aHref = (isLocalHref ? '#' : '/') + href;

  return (
    <div
      className={className}
      onClick={onClick}
    >
      {isLocalHref && (
        <a
          href={aHref}
          onClick={onClick}
        >
          {title}
        </a>
      )}
      {!isLocalHref && (
        <Link
          to={aHref}
          onClick={onClick}
        >
          {title}
        </Link>
      )}
    </div>
  );
}
HyperlinkButton.propTypes = propTypesHyperlinkButton;

export default HyperlinkButton;

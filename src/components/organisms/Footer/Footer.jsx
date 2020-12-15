import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const propTypes = {
  name: PropTypes.string,
};

function Footer({
  name = 'Alex Renin',
}) {
  const classes = useStyles();

  const footerClasses = [classes.footer, classes.footerWhiteFont].join(' ');
  const aClasses = [classes.a, classes.footerWhiteFont].join(' ');

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          &copy;
          {' '}
          {1900 + new Date().getYear()}
          {' '}
          <a
            href="/"
            className={aClasses}
            target="_blank"
          >
            {name}
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;

export default Footer;

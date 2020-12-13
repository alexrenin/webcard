import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';

import styles from './styles';

const useStyles = makeStyles(styles);

function Footer() {
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
            Alex Renin
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};

export default Footer;

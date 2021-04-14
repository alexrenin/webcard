import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import styles from '.'

function NextBackIconBtn({
  className = '',
  isBack = false,
  onClick = () => {},
}) {
  return (
    <IconButton
      className={className}
      onClick={onClick}
      aria-label={isBack ? 'back' : 'forward'}
    >
      {isBack && (
        <ArrowBackIosIcon />
      )}
      {!isBack && (
        <ArrowForwardIosIcon />
      )}
    </IconButton>
  );
}

export default NextBackIconBtn;

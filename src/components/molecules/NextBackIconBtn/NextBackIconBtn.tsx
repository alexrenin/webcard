import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButtonProps } from '@material-ui/core';

import { useStyles } from './styles';

interface INextBackIconBtn extends IconButtonProps {
  isBack: boolean,
}

function NextBackIconBtn({
  className = '',
  isBack = false,
  onClick = () => {},
}: INextBackIconBtn): JSX.Element {
  const classes = useStyles();
  const iconBtnClasses = [
    classes.root,
    className || '',
  ].join(' ');

  return (
    <IconButton
      className={iconBtnClasses}
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

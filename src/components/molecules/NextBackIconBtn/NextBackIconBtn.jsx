import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CustomNextBackIconBtn = withStyles((theme) => ({
  root: {
    height: 32,
    width: 32,
    marginRight: 8,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& :hover svg circle': {
      //fill: theme.palette.greyC.lightGrey,
    },
  },
}))(IconButton);

function NextBackIconBtn({
  className = '',
  isBack = false,
  onClick = () => {},
}) {
  return (
    <CustomNextBackIconBtn
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
    </CustomNextBackIconBtn>
  );
}

export default NextBackIconBtn;

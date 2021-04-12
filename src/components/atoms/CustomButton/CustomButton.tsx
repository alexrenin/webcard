import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';

import buttonStyle from './styles';

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle,
}));

const CustomButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = makeComponentStyles();

  const btnClasses = [
    classes.button,
    classes[size],
    classes[color],
    round ? classes.round : '',
    fullWidth ? classes.fullWidth : '',
    disabled ? classes.disabled : '',
    simple ? classes.simple : '',
    block ? classes.block : '',
    link ? classes.link : '',
    justIcon ? classes.justIcon : '',
    className || '',
  ].join(' ');

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button {...rest} ref={ref} className={btnClasses}>
      {children}
    </Button>
  );
});

CustomButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'facebook',
    'twitter',
    'google',
    'github',
    'transparent',
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CustomButton;

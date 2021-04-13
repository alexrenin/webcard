import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

import { useStyles, ICustomButtonStyleProps, PropsClasses } from './styles';

export interface ICustomButtonProps extends Omit<ButtonProps, 'color'> {
  color: 'primary' | 'transparent',
}

export type Ref = HTMLButtonElement;

const CustomButton = React.forwardRef<Ref, ICustomButtonProps>(({
  color,
  className,
  children,
  ...rest
}: ICustomButtonProps, ref): JSX.Element => {
  const classes: PropsClasses = useStyles({} as ICustomButtonStyleProps);

  const btnClasses = [
    classes.button,
    classes[color],
    className || '',
  ].join(' ');

  return (
    <Button
      ref={ref}
      className={btnClasses}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...rest}
    >
      {children}
    </Button>
  );
});

export default CustomButton;

import React from 'react';
import Button from '@material-ui/core/Button';

import { useStyles, ICustomButtonStyleProps, PropsClasses } from './styles';

export interface ICustomButtonProps {
  color: 'primary' | 'transparent',
  children: React.ReactNode | React.ReactNodeArray,
  className: boolean,
}

export type Ref = HTMLButtonElement;

const CustomButton: React.FC = React.forwardRef<Ref, ICustomButtonProps>(({
  color,
  className,
  children,
  ...rest
}: ICustomButtonProps, ref) => {
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

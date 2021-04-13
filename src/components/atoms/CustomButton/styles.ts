import { Theme, makeStyles } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

const primaryColor = '#9c27b0';
const grayColor = '#999999';

export interface ICustomButtonStyleProps {
  [key: string]: BaseCSSProperties,
}

export type PropsClasses = Record<keyof ICustomButtonStyleProps, string>;

const buttonStyle = {
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    backgroundColor: grayColor,
    color: '#FFFFFF',
    boxShadow: '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0'
      + ' rgba(153, 153, 153, 0.12)',
    border: 'none',
    borderRadius: '3px',
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    fontSize: '12px',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '0',
    willChange: 'box-shadow, transform',
    transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover, &:focus': {
      color: '#FFFFFF',
      backgroundColor: grayColor,
      boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px '
        + '-5px rgba(153, 153, 153, 0.2)',
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      fontSize: '1.1rem',
      marginRight: '4px',
      verticalAlign: 'middle',
    },
    '& svg': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      width: '18px',
      height: '18px',
      marginRight: '4px',
      verticalAlign: 'middle',
    },
  },
  primary: {
    backgroundColor: primaryColor,
    boxShadow: '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: primaryColor,
      boxShadow: '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
    },
  },
  transparent: {
    '&,&:focus,&:hover,&:visited': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
};

export const useStyles = makeStyles<Theme, ICustomButtonStyleProps>(() => buttonStyle as any);

export default useStyles;

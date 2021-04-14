import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    height: 32,
    width: 32,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& :hover svg circle': {
      //fill: theme.palette.greyC.lightGrey,
    },
  },
});

export default useStyles;

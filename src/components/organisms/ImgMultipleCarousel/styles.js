import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  btn: {
    width: 80,
    height: 80,

    '& svg': {
      width: 60,
      height: 60,
      paddingLeft: 20,
    },

    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50,

      '& svg': {
        width: 37,
        height: 37,
        paddingLeft: 15,
      },
    },

    background: 'rgba(0, 0, 0, 0.1)',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.2)',
    },

    color: 'white',
    transition: 'all .2s ease-out',
    position: 'absolute',
    zIndex: 4,

    top: '50%',
    transform: 'translateY(-50%)',
  },
  rightBtn: {
    right: 0,

    '& svg': {
      paddingLeft: 0,
    },
  },
}));

export default {
  useStyles,
};

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  scrollContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    borderRadius: 6,
    marginRight: 8,
  },
  nextBackBtnContainerForward: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 40,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBackBtnContainerBack: {
    position: 'absolute',
    left: 8,
    top: 0,
    width: 40,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forwardBtn: {
    position: 'absolute',
    right: 0,
  },
  backBtn: {
    position: 'absolute',
    left: 0,
  },
}));

export default {
  useStyles,
};

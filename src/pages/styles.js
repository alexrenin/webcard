import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  skills: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  skillsStr: {
    fontSize: 24,
  },

  timelineContainer: {
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default {
  useStyles,
};

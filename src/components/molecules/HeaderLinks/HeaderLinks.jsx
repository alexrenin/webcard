import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

import Button from 'components/atoms/CustomButton';
import LngSelect from 'components/organisms/LngSelect';

import {
  EmailIcon,
  GitHubIcon,
  TelegramIcon,
} from 'components/atoms/icons';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const linkList = [
    {
      icon: <EmailIcon />,
      tooltipTitle: 'Email',
      link: 'mailto:alexrenin.info@gmail.com',
    },
    {
      icon: <GitHubIcon />,
      tooltipTitle: 'GitHub',
      link: 'https://github.com/alexrenin',
    },
    {
      icon: <TelegramIcon />,
      tooltipTitle: 'Telegram',
      link: 'https://t.me/AlexRenin',
    },
  ];

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <LngSelect />
      </ListItem>
      {linkList.map(({
        icon,
        tooltipTitle,
        link,
      }) => (
        <ListItem className={classes.listItem}>
          <Tooltip
            id={tooltipTitle}
            title={tooltipTitle}
            /* eslint-disable-next-line no-undef */
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href={link}
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              {icon}
            </Button>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );
}

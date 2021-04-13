import React from 'react';
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

import { useStyles, IHeaderLinksStyle, PropsClasses } from './styles';

export interface ILinkListItem {
  icon: JSX.Element,
  tooltipTitle: string,
  link: string,
}

export interface IHeaderLinks {
  windowWidth: number,
  linkList?: Array<ILinkListItem>,
}

const defaultLinks: Array<ILinkListItem> = [
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

export default function HeaderLinks({
  windowWidth,
  linkList = defaultLinks,
}: IHeaderLinks): JSX.Element {
  const classes: PropsClasses = useStyles({} as IHeaderLinksStyle);

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
        <ListItem key={link} className={classes.listItem}>
          <Tooltip
            id={tooltipTitle}
            title={tooltipTitle}
            /* eslint-disable-next-line no-undef */
            placement={windowWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              className={classes.navLink}
              href={link}
              /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
              /* @ts-ignore */
              target="_blank"
              color="transparent"
            >
              {icon}
            </Button>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );
}

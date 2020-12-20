import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import { Apps, CloudDownload } from "@material-ui/icons";

import CustomDropdown from 'components/organisms/CustomDropdown';

import { LOCALES } from 'config/constant';

const useStyles = makeStyles((theme) => ({
  dropdownLink: {
    '&,&:hover,&:focus': {
      color: 'inherit',
      textDecoration: 'none',
      display: 'block',
      padding: '10px 20px',
    },
  },
  navLink: {
    color: 'inherit',
    position: 'relative',
    padding: '0.9375rem',
    fontWeight: '400',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'rgba(200, 200, 200, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
    },
  },
}));

function LngSelect({
  lngList = LOCALES,
}) {
  const classes = useStyles();

  const currentUrl = window.location.href;
  const arrSubURL = currentUrl.split('/');
  const current = arrSubURL[3];
  const currentLocales = lngList.find(({ path }) => path === current)
    || lngList.find(({ isDefault }) => isDefault) || {};

  const transformedLocales = lngList.map((curLoc) => {
    if (currentLocales.langID === curLoc.langID) {
      return {
        ...curLoc,
        src: currentUrl,
      };
    }

    const newURLarr = [...arrSubURL];

    if (currentLocales.isDefault) {
      newURLarr.splice(3, 0, curLoc.path);
    } else if (curLoc.isDefault) {
      newURLarr.splice(3, 1);
    } else {
      newURLarr[3] = curLoc.path;
    }

    const src = newURLarr.join('/');

    return {
      ...curLoc,
      src,
    };
  });



  return (
    <CustomDropdown
      noLiPadding
      buttonText={currentLocales.name}
      buttonProps={{
        className: classes.navLink,
        color: 'transparent',
      }}
      buttonIcon={TranslateOutlinedIcon}
      dropdownList={transformedLocales
        .map(({ src, name }) => (
          <Link href={src} className={classes.dropdownLink} color="inherit">
            {name}
          </Link>
        ))}
    />
  );
}

export default LngSelect;

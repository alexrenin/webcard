import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Parallax from 'components/molecules/Parallax';

import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

import ParallaxImg from 'assets/img/bg4.jpg';
import HeaderMenu from '../../organisms/headerMenu/headerMenu';
import Head from '../../atoms/head/head';
import { getLocaleByContenfulID } from '../../atoms/helper';
import C from '../../../constant';

import styles from './styles';

const useStyles = makeStyles(styles);

function Layout({
  mainTitle = '',
  subTitle = '',
  headerRightPart = null,
  children,
}) {
  const classes = useStyles();

  return (
    <div>
      <Head />
      <Header
        brand={`${mainTitle} | ${subTitle}`}
        rightLinks={headerRightPart}
        /* rightLinks={<HeaderLinks />} */
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
      />

      <Parallax image={ParallaxImg}>
        <div className={classes.container}>
          <Grid container className={classes.gridContainer}>
            <Grid item className={classes.gridItem}>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  {mainTitle}
                </h1>
                <h3 className={classes.subtitle}>
                  {subTitle}
                </h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </Parallax>

      <div className={[classes.main, classes.mainRaised].join(' ')}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

const LayoutOld = ({
  locale = 'en-US',
  isHeaderLocal = true,
  children,
}) => {
  const { locales, pages = {} } = C;
  const contentList = pages[locale];

  return (
    <div className="App">
      <Head />
      <HeaderMenu
        contentList={getHeaderContentList({
          isHeaderLocal,
          contentList,
          locale,
        })}
        pullDownMenuContent={getPullDownMenuContent({
          locales,
          locale,
        })}
        pullDownMenuClick={changeLngHandler}
      />
      <div className="contentContainer">
        {children}
      </div>
    </div>
  );
};

function getHeaderContentList({ isHeaderLocal, contentList, locale }) {
  if (isHeaderLocal) return contentList;

  const currentLocale = getLocaleByContenfulID(locale);
  const { path, isDefault = false } = currentLocale;

  return contentList.map((item) => {
    const { href } = item;
    const newHref = isDefault
      ? `#/${href}`
      : `${path}/#/${href}`;

    return {
      ...item,
      href: newHref,
      isLocalHref: false,
    };
  });
}

function getPullDownMenuContent({ locales, locale }) {
  const currentItem = locales.indexOf(
    locales.find(({ contentfulID }) => locale === contentfulID),
  );

  return {
    currentItem,
    listItems: locales.map(({ langID, path, name }) => ({
      title: name,
      text: path,
      id: langID,
    })),
  };
}

function changeLngHandler(lngID) {
  const currentUrl = window.location.href;
  const arrSubURL = currentUrl.split('/');

  const current = arrSubURL[3];
  const currentLocales = C.locales.find(({ path }) => path === current)
            || C.locales.find(({ isDefault }) => isDefault);

  if (currentLocales.langID === lngID) {
    return;
  }

  const newLocales = C.locales.find(({ langID }) => langID === lngID);

  const newURLarr = [...arrSubURL];

  if (currentLocales.isDefault) {
    newURLarr.splice(3, 0, newLocales.path);
  } else if (newLocales.isDefault) {
    newURLarr.splice(3, 1);
  } else {
    newURLarr[3] = newLocales.path;
  }

  const newURL = newURLarr.join('/');
  window.open(newURL, '_self');
}

export default Layout;

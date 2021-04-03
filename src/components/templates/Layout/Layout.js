import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Parallax from 'components/molecules/Parallax';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

import styles from './styles';

const useStyles = makeStyles(styles);
const ParallaxImg = '/bg4.jpg';

function Layout({
  mainTitle = '',
  subTitle = '',
  headerRightPart = null,
  children,
}) {
  const classes = useStyles();

  return (
    <div>
      <Header
        brand={`${mainTitle} | ${subTitle}`}
        rightLinks={headerRightPart}
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

export default Layout;

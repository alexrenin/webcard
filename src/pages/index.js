import React from 'react';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import ArchiveIcon from '@material-ui/icons/Archive';

import Layout from 'components/templates/Layout';
import HeaderLinks from 'components/molecules/HeaderLinks';
import ImgMultipleCarousel from 'components/organisms/ImgMultipleCarousel';

import { useWindowSize } from 'helpers';

import { useStyles } from 'config/styles/styles';

// -- Help functions --

function getData() {
  const skillList = ['JS ES6+', 'TS', 'React', 'React Native', 'Next.js',
    'Material-UI', 'GraphQL', 'd3.js', 'Gatsby.js', 'Php', 'Node.js'];

  const Img = '/images/beekeping.png';

  const workListSchool = [
    {
      image: Img,
      title: 'Beekeeper site',
      description: 'description description description description description description description',
    },
    {
      image: Img,
      title: 'Beekeeper site',
      description: 'description description description description description description description',
    },
    {
      image: Img,
      title: 'Beekeeper site',
      description: 'description description description description description description description',
    },
    {
      image: Img,
      title: 'Beekeeper site',
      description: 'description description description description description description description',
    },
    {
      image: Img,
      title: 'Beekeeper site',
      description: 'description description description description description description description',
    },
    {
      image: Img,
      title: 'Beekeeper site',
      description: 'description description description description description description description',
    },
    {
      image: Img,
      title: 'Beekeeper site',
      description: 'description description description description description description description',
    },
    {
      image: Img,
      title: 'Beekeeper site',
      description: 'description description description description description description description',
    },
  ];

  return {
    skillList,
    workListSchool,
  };
}

/* Main component */

function Index({
  data = {},
  pageContext = {},
}) {
  const classes = useStyles();
  const dimensions = useWindowSize();

  const { allContentfulIndexPage = {} } = data;
  const { edges = [] } = allContentfulIndexPage;
  const indexPage = (edges[0] || {}).node || {};
  const {
    homePage = {},
    resumePage = {},
    portfolioPage = {},
    contactsPage = {},
  } = indexPage;

  const { locale = 'en-US' } = pageContext;

  const {
    skillList,
    workListSchool,
  } = getData();

  const {
    width: windowWidth,
  } = dimensions;
  const isMobile = windowWidth < 580;

  const headerRightPart = (
    <HeaderLinks windowWidth={windowWidth} />
  );

  // depend on padding, margin, font size
  const carouselWidth = isMobile
    ? (windowWidth - 32 - 32 - 16 * 2 - 0.032 * windowWidth) - 0.12 * windowWidth
    : (windowWidth - 60 - 32 - 32 - (32 + 32) * 2 - 36) * 0.5;

  const imgHeight = isMobile
    ? carouselWidth * 0.49
    : carouselWidth / 3;

  const timelineData = [
    {
      id: 0,
      oppositeTitle: '2020 : NOW',
      title: 'React / React Native developer | Parkly',
      subTitle: 'React, Next.js, React Native, Php',
      icon: <WorkIcon />,
      imgList: workListSchool.slice(0, 1),
    },
    {
      id: 1,
      oppositeTitle: '2018 : 2020',
      title: 'Freelanc | Freelancer / Upwork',
      subTitle: 'React, Next.js, Gatsby.js, d3.js, Node.js (Express.js)',
      icon: <LaptopMacIcon />,
      imgList: workListSchool.slice(0, 1),
    },
    {
      id: 2,
      oppositeTitle: '2017 : 2018',
      title: 'Frontend Developer | UTIP',
      subTitle: 'JS native',
      icon: <WorkIcon />,
      imgList: workListSchool,
    },
    {
      id: 3,
      oppositeTitle: '2013 : 2017',
      title: 'University',
      subTitle: 'C++ Arduino, Java, JS, d3.js',
      icon: <SchoolIcon />,
      imgList: workListSchool,
    },
    {
      id: 4,
      oppositeTitle: '2011 : 2012',
      title: 'School',
      subTitle: 'HTML + CSS site',
      icon: <ArchiveIcon />,
      imgList: workListSchool,
    },
  ];

  return (
    <Layout
      mainTitle="Alex Renin"
      subTitle="Frontend Developer"
      headerRightPart={headerRightPart}
    >
      <div className={classes.skills}>
        <Typography component="h1" className={classes.skillsStr}>
          {skillList.join(' / ')}
        </Typography>
      </div>
      <div className={classes.timelineContainer}>
        <Timeline align="alternate">
          {timelineData.map(
            ({
              oppositeTitle, title, subTitle, icon, imgList, id,
            }, index) => (
              <TimelineItem key={id}>
                <TimelineOppositeContent
                  className={classes.MuiTimelineOppositeContent}
                >
                  <Typography variant="body2" color="textSecondary">
                    {oppositeTitle}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    {icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.MuiTimelineContent}>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      {title}
                    </Typography>
                    <Typography>
                      {subTitle}
                    </Typography>
                    <div
                      className={classes.imgListContainer}
                      style={{ width: carouselWidth }}
                    >
                      <ImgMultipleCarousel
                        imgList={imgList}
                        imgHeight={imgHeight}
                        isReverse={(index % 2) !== 0}
                      />
                    </div>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ),
          )}
        </Timeline>
      </div>

    </Layout>
  );
}

export default Index;

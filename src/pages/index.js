import React from 'react';
import { graphql } from 'gatsby';
import 'fontsource-roboto';

import useMediaQuery from '@material-ui/core/useMediaQuery';
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

import './style.css';
import Img from 'assets/img/beekeping.png';
import { useStyles } from './styles';

export const query = graphql`        
    query($locale: String)  {
      allContentfulIndexPage (filter: { node_locale: { eq: $locale } }) {
         edges {
           node {
            resumePage {
                title
                subtitle
                href
                skills {
                    skillList {
                        level
                        title
                    }
                }
                resumeList {
                    title
                    achievements {
                        title
                        subtitle
                        size
                        image {
                            file {
                                url
                            }
                        }
                    }
                }                
            }
            homePage {
                title
                href
                logoTitle
                logoSubtitle
                name
                profession
                technologyStack {
                    stackTehn
                }
            }
            portfolioPage {
                title
                subtitle
                href
                portfolioList {
                    title
                    slug
                    stack
                    description {
                        json
                    }
                    image {
                        file {
                            url
                        }
                    }
                }
            }
            contactsPage {
                title
                href
                contactList {
                    title
                    iconId
                    link
                }
            }                                                                           
           }
         }
      }
    }
`;

// -- Help functions --

function getData() {
  const skillList = ['JS ES6+', 'TS', 'React', 'React Native', 'Next.js',
    'Material-UI', 'GraphQL', 'd3.js', 'Gatsby.js', 'Php', 'Node.js'];

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
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isMobile: window.innerWidth < 580,
  });

  React.useEffect(() => {
    function handleResize() {
      const newWidth = Math.min(window.innerWidth, window.outerWidth);

      setDimensions({
        height: window.innerHeight,
        width: newWidth,
        isMobile: newWidth < 580,
      });
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

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

  const headerRightPart = (
    <HeaderLinks />
  );

  const {
    width: windowWidth,
    isMobile,
  } = dimensions;

  // depend on padding, margin, font size
  const carouselWidth = isMobile
    ? (windowWidth - 32 - 32 - 16 * 2 - 0.032 * windowWidth) - 0.12 * windowWidth
    : (windowWidth - 60 - 32 - 32 - (32 + 32) * 2 - 36) * 0.5;

  const imgHeight = isMobile
    ? carouselWidth * 0.49
    : carouselWidth / 3;

  const timelineData = [
    {
      oppositeTitle: '2020 : NOW',
      title: 'React / React Native developer | Parkly',
      subTitle: 'React, Next.js, React Native, Php',
      icon: <WorkIcon />,
      imgList: workListSchool.slice(0, 1),
    },
    {
      oppositeTitle: '2018 : 2020',
      title: 'Freelanc | Freelancer / Upwork',
      subTitle: 'React, Next.js, Gatsby.js, d3.js, Node.js (Express.js)',
      icon: <LaptopMacIcon />,
      imgList: workListSchool.slice(0, 1),
    },
    {
      oppositeTitle: '2017 : 2018',
      title: 'Frontend Developer | UTIP',
      subTitle: 'JS native',
      icon: <WorkIcon />,
      imgList: workListSchool,
    },
    {
      oppositeTitle: '2013 : 2017',
      title: 'University',
      subTitle: 'C++ Arduino, Java, JS, d3.js',
      icon: <SchoolIcon />,
      imgList: workListSchool,
    },
    {
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
              oppositeTitle, title, subTitle, icon, imgList,
            }, index) => (
              <TimelineItem>
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
                      style={{ maxWidth: carouselWidth }}
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

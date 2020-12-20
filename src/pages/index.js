import React from 'react';
import { graphql } from 'gatsby';
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

import './style.css';
import { useStyles } from './styles';

import Img from 'assets/img/beekeping.png';

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

  console.log(indexPage);

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
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2020 : NOW
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  React / React Native developer | Parkly
                </Typography>
                <Typography> React, Next.js, React Native, Php </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2018 : 2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Freelanc | Freelancer / Upwork
                </Typography>
                <Typography> React, Next.js, Gatsby.js, d3.js, Node.js (Express.js) </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2017 : 2018
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Frontend Developer | UTIP
                </Typography>
                <Typography> JS native </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2013 : 2017
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  University
                </Typography>
                <Typography>C++ Arduino, Java, JS, d3.js </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                2011 : 2012
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <ArchiveIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  School
                </Typography>
                <Typography>HTML + CSS site</Typography>
                <div style={{width: 300}}>
                  <ImgMultipleCarousel imgList={workListSchool} />
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

    </Layout>
  );
}

export default Index;

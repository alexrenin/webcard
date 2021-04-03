import React from 'react';
import ImageGallery from 'react-image-gallery';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import NextBackIconBtn from 'components/molecules/NextBackIconBtn';

import { useStyles } from './styles';
import './imgMultipleCarousel.module.scss';

function ImgMultipleCarousel({
  imgList = [],
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isThumbnails = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div
      className={classes.container}
    >
      <ImageGallery
        items={imgList.map(({ image, ...props }) => ({
          ...props,
          original: image,
          thumbnail: image,
        }))}
        showPlayButton={false}
        showThumbnails={isThumbnails}
        renderLeftNav={(onClick, disabled) => {

          return (
            <NextBackIconBtn
              className={classes.btn}
              disabled={disabled}
              isBack
              onClick={onClick}
            />
          );
        }}
        renderRightNav={(onClick, disabled) => {

          return (
            <NextBackIconBtn
              className={[classes.btn, classes.rightBtn].join(' ')}
              disabled={disabled}
              onClick={onClick}
            />
          );
        }}
      />
    </div>
  );
}

export default ImgMultipleCarousel;

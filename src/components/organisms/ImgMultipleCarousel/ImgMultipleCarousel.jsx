import React from 'react';
import ImageGallery from 'react-image-gallery';

import { useStyles } from './styles';
import './styles.css';

function ImgMultipleCarousel({
  imgList = [],
}) {
  const classes = useStyles();

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
      />
    </div>
  );
}

export default ImgMultipleCarousel;

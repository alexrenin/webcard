// eslint-disable jsx-a11y/no-static-element-interactions
import React, { useRef, useState } from 'react';

import NextBackIconBtn from 'components/molecules/NextBackIconBtn';

import { useStyles } from './styles';

function ImgMultipleCarousel({
  imgList = [],
  imgHeight = 96,
}) {
  const classes = useStyles();
  const containerRef = useRef();
  const [btnShow, setBtnShow] = useState({
    isLeft: false,
    isRight: false,
  });

  const {
    isLeft,
    isRight,
  } = btnShow || {};

  function updateWidth() {
    const { current } = containerRef || {};
    const {
      scrollWidth = 0,
      clientWidth = 0,
      scrollLeft = 0,
    } = current || {};

    const isLeftShow = scrollLeft > 0;
    const isRightShow = Math.floor(scrollWidth - scrollLeft) > clientWidth;

    setBtnShow({
      isLeft: isLeftShow,
      isRight: isRightShow,
    });
  }
  function onNextClick() {
    const { current } = containerRef || {};
    const {
      scrollWidth = 0,
      clientWidth = 0,
      scrollLeft = 0,
    } = current || {};

    const rowPosX = scrollLeft + clientWidth;
    const posX = rowPosX < (scrollWidth - clientWidth)
      ? rowPosX
      : scrollWidth - clientWidth;

    containerRef.current.scrollTo({
      top: 0,
      left: posX,
      behavior: 'smooth',
    });
  }
  function onBackClick() {
    const { current } = containerRef || {};
    const {
      scrollLeft = 0,
      clientWidth = 0,
    } = current || {};

    const rowPosX = scrollLeft - clientWidth;
    const posX = rowPosX > 0
      ? rowPosX
      : 0;

    containerRef.current.scrollTo({
      top: 0,
      left: posX,
      behavior: 'smooth',
    });
  }

  return (
    <div
      className={classes.container}
    >
      {isLeft && (
        <div
          className={classes.nextBackBtnContainerBack}
        >
          <NextBackIconBtn
            className={classes.backBtn}
            onClick={onBackClick}
            isBack
          />
        </div>
      )}
      <div
        ref={containerRef}
        onScroll={updateWidth}
        className={classes.scrollContainer}
      >
        {imgList.map((imgItem) => {
          const { image, title } = imgItem;

          return (
            <img
              key={image}
              className={classes.image}
              style={{
                height: imgHeight,
              }}
              src={image}
              alt={title}
              onLoad={updateWidth}
            />
          );
        })}
      </div>
      {isRight && (
        <div
          className={classes.nextBackBtnContainerForward}
        >
          <NextBackIconBtn
            className={classes.forwardBtn}
            onClick={onNextClick}
          />
        </div>
      )}
    </div>
  );
}

export default ImgMultipleCarousel;

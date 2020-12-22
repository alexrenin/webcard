// eslint-disable jsx-a11y/no-static-element-interactions
import React, { useRef, useState } from 'react';

import NextBackIconBtn from 'components/molecules/NextBackIconBtn';

import { useStyles } from './styles';

function ImgMultipleCarousel({
  imgList = [],
  imgHeight = 96,
  isReverse = false,
}) {
  const classes = useStyles();
  const containerRef = useRef();
  const [btnShow, setBtnShow] = useState({
    isLeft: false,
    isRight: false,
  });
  const [modalOption, setModalOption] = useState({
    isModalOpen: false,
    index: 0,
  });

  const {
    isLeft,
    isRight,
  } = btnShow || {};

  const {
    isModalOpen,
    index: startIndex,
  } = modalOption;

  function updateWidth() {
    const { current } = containerRef || {};
    const {
      scrollWidth = 0,
      clientWidth = 0,
      scrollLeft = 0,
    } = current || {};

    const {
      isLeftShow,
      isRightShow,
    } = (() => {
      if (isReverse) {
        return {
          isLeftShow: Math.floor(scrollWidth - Math.abs(scrollLeft)) > clientWidth,
          isRightShow: scrollLeft < 0,
        };
      }

      return {
        isLeftShow: scrollLeft > 0,
        isRightShow: Math.floor(scrollWidth - scrollLeft) > clientWidth,
      };
    })();

    setBtnShow({
      isLeft: isLeftShow,
      isRight: isRightShow,
    });
  }
  function onRightClick() {
    const { current } = containerRef || {};
    const {
      scrollWidth = 0,
      clientWidth = 0,
      scrollLeft = 0,
    } = current || {};

    const posX = (() => {
      if (isReverse) {
        const rowPosXRev = scrollLeft + clientWidth;

        if (rowPosXRev > 0) {
          return 0;
        }

        return rowPosXRev;
      }

      const rowPosX = scrollLeft + clientWidth;
      if (rowPosX < (scrollWidth - clientWidth)) {
        return rowPosX;
      }

      return scrollWidth - clientWidth;
    })();

    containerRef.current.scrollTo({
      top: 0,
      left: posX,
      behavior: 'smooth',
    });
  }
  function onLeftClick() {
    const { current } = containerRef || {};
    const {
      scrollLeft = 0,
      clientWidth = 0,
      scrollWidth = 0,
    } = current || {};

    const posX = (() => {
      if (isReverse) {
        const rowPosXRev = scrollLeft - clientWidth;

        if (rowPosXRev < (scrollWidth - clientWidth)) {
          return rowPosXRev;
        }

        return clientWidth - scrollWidth;
      }

      const rowPosX = scrollLeft - clientWidth;
      if (rowPosX > 0) {
        return rowPosX;
      }

      return 0;
    })();

    containerRef.current.scrollTo({
      top: 0,
      left: posX,
      behavior: 'smooth',
    });
  }

  function openModal(index) {
    setModalOption((prevState) => ({
      ...prevState,
      index,
      isModalOpen: true,
    }));
  }
  function closeModal() {
    setModalOption((prevState) => ({
      ...prevState,
      isModalOpen: false,
    }));
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
            onClick={onLeftClick}
            isBack
          />
        </div>
      )}
      <div
        ref={containerRef}
        onScroll={updateWidth}
        className={[
          classes.scrollContainer,
          isReverse ? classes.scrollCntReverse : '',
        ].join(' ')}
      >
        {imgList.map((imgItem, index) => {
          const { image, title } = imgItem;

          return (
            <img
              key={image}
              onClick={() => openModal(index)}
              className={[
                classes.image,
                classes.imageReverse,
              ].join(' ')}
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
            onClick={onRightClick}
          />
        </div>
      )}
    </div>
  );
}

export default ImgMultipleCarousel;

import React from 'react';
import PropTypes from 'prop-types';

const propTypesResumeItem = {
  title: PropTypes.string,
  imageCSS: PropTypes.string,
  subTitle: PropTypes.string,
  sizeCSS: PropTypes.string,
};

function ResumeItem({
  title = '',
  imageURL = '',
  subtitle = '',
  size = '',
}) {
  const resumeItemClass = `resumeItem ${size}`;

  return (
    <div className={resumeItemClass}>
      <div
        className="resumeItemBackImgCont"
      >
        <img
          className="resumeItemImg"
          alt={title}
          src={imageURL}
        />
      </div>
      <h3>
        {title}
      </h3>
      <h4>
        {subtitle}
      </h4>

    </div>
  );
}
ResumeItem.propTypes = propTypesResumeItem;

export default ResumeItem;

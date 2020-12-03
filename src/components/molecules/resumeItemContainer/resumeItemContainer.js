import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ResumeItem from '../../atoms/resumeItem/resumeItem';

const propTypesResumeItemContainer = {
  title: PropTypes.string,
  itemList: PropTypes.array,
};

function ResumeItemContainer({
  title = '',
  achievements = [],
}) {
  return (
    <div className="resumeItemContainer">
      {achievements.map(
        (item) => {
          const key = v4();
          return (
            <ResumeItem {...{
              ...item,
              key,
            }}
            />
          );
        },
      )}
      <h2 className="resumeItemTitle">
        {title}
      </h2>
    </div>
  );
}
ResumeItemContainer.propTypes = propTypesResumeItemContainer;

export default ResumeItemContainer;

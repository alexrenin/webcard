import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { v4 } from 'uuid';
import ResumeItemContainer from '../../molecules/resumeItemContainer/resumeItemContainer';
import ResumeSkill from '../../molecules/resumeSkill/resumeSkill';

const propTypesResume = {
  href: PropTypes.string,
  subtitle: PropTypes.string,
  resumeList: PropTypes.array,
  skills: PropTypes.object,
};

function Resume({
  href = '',
  subtitle = '',
  resumeList = [],
  skills = {},
}) {
  const { skillList = [] } = skills;

  return (
    <div
      className="resumePage"
      id={href}
    >
      <h1 className="resumeTitle">
        {subtitle}
      </h1>
      <div className="resumeContainer">
        <div className="resumeSubContainer1">
          {resumeList.map(
            (item) => {
              const key = v4();
              return (
                <ResumeItemContainer {...{
                  ...item,
                  key,
                }}
                />
              );
            },
          )}
        </div>
        <div className="resumeSubContainer2">
          {skillList.map(
            (item) => {
              const key = v4();
              const level = +item.level;
              return (
                <ResumeSkill {...{
                  ...item,
                  level,
                  key,
                }}
                />
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
Resume.propTypes = propTypesResume;

export default Resume;

import React from 'react';
import PropTypes from 'prop-types';
import SkillCircle from '../../atoms/skillCircle/skillCircle';

const propTypesResumeSkill = {
  level: PropTypes.number,
  title: PropTypes.string,
};

function ResumeSkill({
  title = '',
  level = 50,
}) {
  return (
    <div className="resumeSkillContainer">
      <div className="resumeSkillCircleContainer">
        <SkillCircle {...{
          level,
        }}
        />
        <span>
          {`${level}%`}
        </span>
      </div>
      <h4>
        {title}
      </h4>
    </div>
  );
}
ResumeSkill.propTypes = propTypesResumeSkill;

export default ResumeSkill;

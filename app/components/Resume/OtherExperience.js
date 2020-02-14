import React from 'react';
import PropTypes from 'prop-types';

import Participation from './Experience/Participation';

const OtherExperience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Other Experience</h3>
    </div>
    {data.map((job) => (
      <Participation
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

OtherExperience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

OtherExperience.defaultProps = {
  data: [],
};


export default OtherExperience;

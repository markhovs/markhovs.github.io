import React from 'react';
import PropTypes from 'prop-types';

import Qualification from './Education/Qualification';

const OtherEducation = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Other Education</h3>
    </div>
    {data.map((qualification) => (
      <Qualification
        data={qualification}
        key={qualification.establishment}
      />
    ))}
  </div>
);

OtherEducation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    establishment: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

OtherEducation.defaultProps = {
  data: [],
};


export default OtherEducation;

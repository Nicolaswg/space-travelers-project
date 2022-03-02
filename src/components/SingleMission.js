import React from 'react';
import { PropTypes } from 'prop-types';

const MissionTable = (props) => {
  const {
    id,
    name,
    description,
  } = props;

  // console.log(reserved);

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{id}</td>
    </tr>
  );
};

MissionTable.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MissionTable;

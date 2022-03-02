import React from 'react';
import { PropTypes } from 'prop-types';

const MissionTable = (props) => {
  const {
    id,
    name,
    description,
  } = props;

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
};

MissionTable.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionTable;

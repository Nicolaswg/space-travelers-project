import React from 'react';
import { PropTypes } from 'prop-types';

const MissionTable = (props) => {
  const {
    id,
    name,
    description,
    reserved,
  } = props;

  return (
    <tr className={reserved ? 'background-gray' : ''} id={id}>
      <td className="mission-name">{name}</td>
      <td>{description}</td>
      {reserved ? (<td className="align-verticle"><span className="active-member">Active member</span></td>) : (<td className="align-verticle"><span className="not-member">NOT A MEMBER</span></td>)}
      {reserved ? (<td className="align-verticle"><button type="button" className="leave-mission">Leave Mission</button></td>) : (<td className="align-verticle"><button type="button" className="join-mission">Join Mission</button></td>)}
    </tr>
  );
};

MissionTable.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionTable;

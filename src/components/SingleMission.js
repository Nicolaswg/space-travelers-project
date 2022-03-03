import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, cancelMission } from '../Redux/Missions/missions';

const MissionTable = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    description,
    reserved,
  } = props;

  const onAddClick = () => {
    dispatch(joinMission(id));
  };

  const onCancelClick = () => {
    dispatch(cancelMission(id));
  };

  return (
    <tr className="background-gray" id={id}>
      <td className="mission-name">{name}</td>
      <td>{description}</td>
      {reserved ? (<td className="align-verticle"><span className="active-member">Active member</span></td>) : (<td className="align-verticle"><span className="not-member">NOT A MEMBER</span></td>)}
      {reserved ? (<td className="align-verticle"><button type="button" onClick={onCancelClick} className="leave-mission">Leave Mission</button></td>) : (<td className="align-verticle"><button type="button" onClick={onAddClick} className="join-mission">Join Mission</button></td>)}
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

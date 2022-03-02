import React from 'react';
import { useSelector } from 'react-redux';
import SingleMission from './SingleMission';

export default function MissionsContainer() {
  const MissionsData = useSelector((state) => state.missionsReducer);
  // console.log(MissionsData);
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {MissionsData.map((mission) => (
          <SingleMission
            key={mission.id}
            name={mission.name}
            description={mission.description}
            id={mission.id}
          />
        ))}
      </tbody>
    </table>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import SingleMission from './SingleMission';

export default function MissionsContainer() {
  const missionsData = useSelector((state) => state.missionsReducer);
  console.log(missionsData);
  return (
    <table>
      <thead>
        <tr>
          <td>Mission</td>
          <td>Description</td>
          <td>Status</td>
          <td> </td>
        </tr>
      </thead>
      <tbody>
        {missionsData.map((mission) => (
          <SingleMission
            key={mission.id}
            name={mission.name}
            description={mission.description}
            id={mission.id}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </table>
  );
}

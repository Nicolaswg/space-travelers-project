import React from 'react';
import { useSelector } from 'react-redux';
import MissionTable from './SingleMission';

export default function MissionsContainer() {
  const missionsData = useSelector((state) => state.missionsReducer);
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
          <MissionTable
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

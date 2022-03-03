import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const missions = useSelector((state) => state.missionsReducer);
  // const rockets = useSelector((state) => state.rocketsReducer);

  // const rocketsReserved = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-container flex">
      <div className="missions-container">
        <h1>My Missions</h1>
        <ul>
          {missions.filter((mission) => mission.reserved === true).map((item) => (
            item.reserved ? (<li>{item.name}</li>) : (<h2>No MIssions are added...</h2>)
          ))}
        </ul>
      </div>
      <div className="rockets-container">
        <h1>My Rockets</h1>
        <ul>
          <li>hebehdbeh</li>
        </ul>
      </div>
    </div>
  );
}

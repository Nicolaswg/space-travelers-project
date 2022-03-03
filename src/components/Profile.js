import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const missions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div className="profile-container flex">
      <div className="missions-container">
        <h1>My Missions</h1>
        <ul>
          {missions.filter((mission) => mission.reserved === true).map((item) => (
            item.reserved ? (<li key={item.id}>{item.name}</li>) : (<></>)
          ))}
        </ul>
      </div>
      <div className="rockets-container">
        <h1>My Rockets</h1>
        <ul>
          {rockets.filter((rocket) => rocket.reserved === true).map((item) => (
            item.reserved ? (<li key={item.id}>{item.name}</li>)
              : (<></>)
          ))}
        </ul>
      </div>
    </div>
  );
}

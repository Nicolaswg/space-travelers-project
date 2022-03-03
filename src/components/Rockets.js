import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

export default function Rockets() {
  const rocketData = useSelector((state) => state.rocketsReducer);
  return (
    <div className="rocket-container flex">
      {rocketData.map((rocket) => (
        <RocketItem
          id={rocket.id}
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

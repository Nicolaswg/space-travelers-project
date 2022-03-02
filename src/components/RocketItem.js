import React from 'react';
import { PropTypes } from 'prop-types';

const RocketItem = (props) => {
  const {
    id,
    name,
    description,
    image,
    reserved,
  } = props;

  return (
    <div className="rocket-card flex" id={id}>
      <div className="img-container">
        <img src={image} alt="img" />
      </div>
      <div className="rocket-content">
        <h2>{name}</h2>
        <p>
          {reserved ? (<></>) : (<span>Reserved</span>)}
          {description}
        </p>
        {reserved ? (<button className="not-reserved" type="button">Reserve Rocket</button>) : (<button className="reserved" type="button">Cancel Reservation</button>)}
      </div>
    </div>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

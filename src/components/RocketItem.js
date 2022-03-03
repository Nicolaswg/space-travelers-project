import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addReservation, cancelReservation } from '../Redux/Rockets/rockets';

const RocketItem = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    description,
    image,
    reserved,
  } = props;

  const onAddClick = () => {
    dispatch(addReservation(id));
  };

  const onCancelClick = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="rocket-card flex" id={id}>
      <div className="img-container">
        <img src={image} alt="img" />
      </div>
      <div className="rocket-content">
        <h2>{name}</h2>
        <p>
          {!reserved ? (<></>) : (<span>Reserved</span>)}
          {description}
        </p>
        {!reserved ? (<button className="not-reserved" type="button" onClick={onAddClick}>Reserve Rocket</button>) : (<button className="reserved" type="button" onClick={onCancelClick}>Cancel Reservation</button>)}
      </div>
    </div>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

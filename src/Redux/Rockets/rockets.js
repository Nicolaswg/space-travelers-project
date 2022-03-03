const GET_ROCKETS_API = 'SpaceTravelersHub/missions/GET_ROCKETS_API';
const ADD_ROCKETS_RESERVATION_API = 'SpaceTravelersHub/missions/ADD_ROCKETS_RESERVATION_API';
const CANCEL_ROCKETS_RESERVATION_API = 'SpaceTravelersHub/missions/CANCEL_ROCKETS_RESERVATION_API';
const ROCKET_API = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const getRockets = (payload) => ({
  type: GET_ROCKETS_API,
  payload,
});

export const addReservation = (id) => ({
  type: ADD_ROCKETS_RESERVATION_API,
  id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_ROCKETS_RESERVATION_API,
  id,
});

export const getRocketsFromAPI = () => async (dispatch) => {
  await fetch(`${ROCKET_API}`)
    .then((response) => response.json())
    .then((data) => {
      const arrData = data.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
      }));
      if (arrData) {
        dispatch(getRockets(arrData));
      }
    });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_API:
      return [...action.payload];
    case ADD_ROCKETS_RESERVATION_API: {
      const rocketState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return [...rocketState];
    }
    case CANCEL_ROCKETS_RESERVATION_API: {
      const rocketState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
      return [...rocketState];
    }
    default:
      return state;
  }
};

export default rocketsReducer;
